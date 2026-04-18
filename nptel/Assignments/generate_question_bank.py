from pathlib import Path
import json
import re
import unicodedata

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "urban-informatics-question-bank.js"

PDFS = {
    "Urban Informatics_Assignment_week_1.pdf": 1,
    "Urban Informatics_Assignment 2_Week 2_corrections final.pdf": 2,
    "Urban Informatics_Assignment_week_3.pdf": 3,
    "Urban Informatics_Assignment 4_Week 4.pdf": 4,
    "Urban Informatics_Assignment_week_5.pdf": 5,
    "Assignment 6_Urban Informatics.pdf": 6,
    "Assignment 7_Urban Informatics.pdf": 7,
    "Assignment 8_Urban Informatics.pdf": 8,
    "Week9_Assignment 9_Urban Informatics_2026.pdf": 9,
    "Assignment 10_Urban Informatics.pdf": 10,
    "UI_Assignment 11_Week 11.pdf": 11,
    "Assignment 12_Urban Informatics.pdf": 12,
}

QUESTION_RE = re.compile(
    r"QUESTION\s*(\d+)\s*:(.*?)(?=QUESTION\s*\d+\s*:|\*+END\*+|$)",
    re.IGNORECASE | re.DOTALL,
)
ANSWER_RE = re.compile(
    r"Correct\s*Answers?\s*:\s*(.*?)(?=Detailed\s*(?:explanation|Solution)\s*:|Refer to lecture|$)",
    re.IGNORECASE | re.DOTALL,
)
EXPLANATION_RE = re.compile(
    r"Detailed\s*(?:explanation|Solution)\s*:\s*(.*)$",
    re.IGNORECASE | re.DOTALL,
)
OPTION_RE = re.compile(r"(?<![A-Za-z0-9])([a-d])[\.\)]\s")
MARK_RE = re.compile(r"^\s*\[(.*?)\]\s*")
ANSWER_LEAD_RE = re.compile(
    r"^\s*([a-d](?:\s*[\.\)])?(?:\s*(?:,|&|and)\s*[a-d](?:\s*[\.\)])?)*)",
    re.IGNORECASE,
)
NOISE_RE = re.compile(
    r"NPTEL Online Certification Courses Indian Institute of Technology Kharagpur|"
    r"NPTEL Online Certification Courses|"
    r"Indian Institute of Technology Kharagpur",
    re.IGNORECASE,
)


def normalize_text(value: str) -> str:
    replacements = {
        "\u2013": "-",
        "\u2014": "-",
        "\u2212": "-",
        "\u2018": "'",
        "\u2019": "'",
        "\u201c": '"',
        "\u201d": '"',
        "\u2026": "...",
        "\u00d7": "x",
        "\u2192": "->",
        "\u2264": "<=",
        "\u2265": ">=",
        "\u03c1": "rho",
        "\u03b5": "epsilon",
    }
    for old, new in replacements.items():
        value = value.replace(old, new)
    value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode("ascii")
    value = value.replace(" ,", ",").replace(" .", ".")
    value = re.sub(r"\s+", " ", value).strip()
    return value


def option_label(index: int) -> str:
    return chr(65 + index)


def format_answer(indices: list[int], options: list[str]) -> str:
    return "; ".join(f"{option_label(index)}. {options[index]}" for index in indices)


def prompt_target(prompt: str) -> str:
    compact = prompt.strip().rstrip(".:?")
    if len(compact) > 150:
        return "the concept asked in this PDF question"
    return f"'{compact}'"


def is_reference_only(explanation: str) -> bool:
    lowered = explanation.lower().strip()
    return not lowered or lowered.startswith("refer to lecture")


def build_question_explanation(prompt: str, options: list[str], correct_indices: list[int], explanation: str) -> str:
    correct_text = format_answer(correct_indices, options)
    target = prompt_target(prompt)

    if is_reference_only(explanation):
        return (
            f"The PDF answer key marks {correct_text}. This answer is suitable because it directly addresses "
            f"{target}, while the other choices point to different concepts or tools."
        )

    return (
        f"{explanation} The PDF-marked answer is {correct_text}, which directly addresses {target}."
    )


def build_option_explanations(
    prompt: str,
    options: list[str],
    correct_indices: list[int],
    explanation: str,
) -> list[str]:
    correct_text = format_answer(correct_indices, options)
    target = prompt_target(prompt)
    feedback: list[str] = []

    for index, option in enumerate(options):
        if index in correct_indices:
            feedback.append(
                f"Suitable: the PDF answer key includes this option. It matches {target}."
            )
            continue

        feedback.append(
            f"Not suitable: this option says '{option}', but the PDF-marked answer is {correct_text}. "
            f"It does not match {target}; it refers to a different concept, tool, layer, or relationship."
        )

    if not is_reference_only(explanation):
        feedback = [
            item if index not in correct_indices else f"{item} {explanation}"
            for index, item in enumerate(feedback)
        ]

    return feedback


def infer_topic(week: int, prompt: str, options: list[str]) -> str:
    text = f"{prompt} {' '.join(options)}".lower()
    if "data-driven governance" in text or "systematically collected data" in text:
        return "Data-driven governance"
    if "association" in text or "binary incidence" in text or "apriori" in text or "lift" in text or ("support" in text and "confidence" in text):
        return "Association rules"
    if re.search(r"\b(tcp/ip|tcp|ip address|internet protocol)\b", text):
        return "IoT communication"

    topic_rules = [
        ("people", "People-place-technology"),
        ("time-series", "Time-series data"),
        ("velocity", "Big data characteristics"),
        ("gtfs", "Transit data standards"),
        ("datasmart", "DataSmart Cities framework"),
        ("citizen science", "Citizen participation"),
        ("csv", "Data formats"),
        ("json", "Data formats"),
        ("normal form", "Database normalization"),
        ("nosql", "NoSQL databases"),
        ("neo4j", "Graph databases"),
        ("mysql", "Relational databases"),
        ("where", "SQL query logic"),
        ("group by", "SQL aggregation"),
        ("api", "API data access"),
        ("scrap", "Web scraping"),
        ("local variable", "Python scope"),
        ("inheritance", "Object-oriented programming"),
        ("polymorphism", "Object-oriented programming"),
        ("pandas", "Python data analysis"),
        ("shape", "Pandas DataFrames"),
        ("orm", "Database integration"),
        ("supervised", "Machine learning types"),
        ("unsupervised", "Machine learning types"),
        ("reinforcement", "Reinforcement learning"),
        ("sarsa", "Reinforcement learning"),
        ("entropy", "Decision trees"),
        ("gini", "Decision trees"),
        ("random forest", "Ensemble learning"),
        ("xgboost", "Boosting"),
        ("gridsearch", "Model tuning"),
        ("k-means", "Clustering"),
        ("dbscan", "Density clustering"),
        ("pca", "Dimensionality reduction"),
        ("ann", "Neural networks"),
        ("activation", "Activation functions"),
        ("backpropagation", "Neural network training"),
        ("cnn", "Convolutional neural networks"),
        ("kernel", "Convolutional neural networks"),
        ("lstm", "Sequence learning"),
        ("shap", "Model explainability"),
        ("adc", "Sensor conversion"),
        ("sensor", "Sensing"),
        ("actuator", "Actuation"),
        ("arduino", "Arduino prototyping"),
        ("atmega", "Arduino hardware"),
        ("eeprom", "Arduino libraries"),
        ("servo", "Actuators"),
        ("pir", "Motion sensing"),
        ("gis query", "GIS queries"),
        ("relate", "GIS relationships"),
        ("confusion matrix", "Model evaluation"),
        ("hotspot", "Hotspot analysis"),
        ("fishnet", "Spatial aggregation"),
        ("arcgis api", "GIS automation"),
        ("postgis", "Spatial databases"),
    ]

    for needle, topic in topic_rules:
        if needle in text:
            return topic

    return f"Week {week} assignment concept"


def parse_correct_indices(answer_raw: str, options: list[str]) -> list[int]:
    lead_match = ANSWER_LEAD_RE.match(answer_raw)
    lead = lead_match.group(1) if lead_match else ""
    letters = [letter.lower() for letter in re.findall(r"[a-d]", lead, flags=re.IGNORECASE)]
    if letters:
        return sorted(set(ord(letter) - 97 for letter in letters))

    lowered_answer = answer_raw.lower()
    matches = []
    for index, option in enumerate(options):
        if option and option.lower() in lowered_answer:
            matches.append(index)
    return sorted(set(matches))


def build_question_bank() -> list[dict]:
    bank: list[dict] = []
    for pdf_name, week in PDFS.items():
        pdf_path = ROOT / pdf_name
        text = "\n".join((page.extract_text() or "") for page in PdfReader(str(pdf_path)).pages)
        text = NOISE_RE.sub(" ", text)

        for match in QUESTION_RE.finditer(text):
            number = int(match.group(1))
            body = normalize_text(match.group(2))

            mark_match = MARK_RE.match(body)
            marks = normalize_text(mark_match.group(1)) if mark_match else ""
            if mark_match:
                body = body[mark_match.end():].strip()

            answer_match = ANSWER_RE.search(body)
            if not answer_match:
                raise ValueError(f"Could not parse answer for week {week}, question {number}")

            answer_raw = normalize_text(answer_match.group(1))
            prefix = body[:answer_match.start()].strip()
            explanation_match = EXPLANATION_RE.search(body)
            explanation = normalize_text(explanation_match.group(1)) if explanation_match else answer_raw

            markers = list(OPTION_RE.finditer(prefix))
            if len(markers) < 2:
                raise ValueError(f"Could not parse options for week {week}, question {number}")

            prompt = normalize_text(prefix[:markers[0].start()])
            options: list[str] = []
            for index, option_match in enumerate(markers):
                start = option_match.end()
                end = markers[index + 1].start() if index + 1 < len(markers) else len(prefix)
                options.append(normalize_text(prefix[start:end]))

            correct_indices = parse_correct_indices(answer_raw, options)
            if not correct_indices:
                raise ValueError(f"Could not parse correct answer for week {week}, question {number}")

            bank.append(
                {
                    "week": week,
                    "number": number,
                    "marks": marks,
                    "source": pdf_name,
                    "sourceLabel": f"Week {week} assignment PDF",
                    "pdfDirect": True,
                    "topic": infer_topic(week, prompt, options),
                    "prompt": prompt,
                    "options": options,
                    "correctIndices": correct_indices,
                    "multiSelect": len(correct_indices) > 1 or "select all" in prompt.lower(),
                    "pdfAnswer": answer_raw,
                    "explanation": build_question_explanation(prompt, options, correct_indices, explanation),
                    "optionExplanations": build_option_explanations(prompt, options, correct_indices, explanation),
                }
            )

    bank.sort(key=lambda item: (item["week"], item["number"]))
    return bank


def main() -> None:
    bank = build_question_bank()
    payload = "window.questionBankData = " + json.dumps(bank, ensure_ascii=True, indent=2) + ";\n"
    OUTPUT.write_text(payload, encoding="utf-8")
    print(f"Wrote {len(bank)} questions to {OUTPUT}")


if __name__ == "__main__":
    main()
