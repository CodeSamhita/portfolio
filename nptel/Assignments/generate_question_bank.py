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

TOPIC_THEORY = {
    "People-place-technology": "The people dimension is about stakeholders who generate, interpret, govern, and use urban data.",
    "Time-series data": "Time-series data is valuable because it preserves temporal order, making trends, peaks, seasonality, and shocks visible.",
    "Big data characteristics": "Big-data characteristics describe scale, speed, diversity, reliability, and value of data; velocity is specifically about rapid data inflow.",
    "Transit data standards": "Transit data standards such as GTFS organize schedules, stops, routes, and service details so systems can share transport information.",
    "DataSmart Cities framework": "DataSmart Cities questions test institutional roles: strategy, city governance, analytics support, and multi-stakeholder collaboration.",
    "Data-driven governance": "Data-driven governance means decisions are supported by systematically collected and analyzed evidence rather than intuition alone.",
    "Citizen participation": "Citizen participation concepts involve residents contributing data, reporting issues, joining consultations, or influencing priorities.",
    "Data formats": "Data formats should match structure: CSV is flat tabular data, JSON supports nested name-value data, and XML represents hierarchical tagged data.",
    "Relational databases": "Relational databases organize facts as related tables with keys, constraints, and query operations that preserve data integrity.",
    "Database normalization": "Normalization reduces redundancy and dependency problems so each fact is stored in the correct place.",
    "NoSQL databases": "NoSQL systems are chosen for flexible schemas, distributed scale, high availability, graph relationships, or large heterogeneous data.",
    "SQL query logic": "SQL logic depends on operation order: rows are filtered before grouping, groups are filtered with HAVING, and constraints protect valid data.",
    "SQL aggregation": "Aggregation summarizes grouped records using functions such as COUNT, AVG, SUM, MIN, and MAX.",
    "API data access": "APIs provide controlled, secure, programmatic access to data without exposing the raw database directly.",
    "GIS relationships": "GIS relationships depend on spatial or tabular links such as common fields, one-to-many relates, and referential integrity.",
    "Database integration": "Database integration connects programs, queries, objects, and storage layers so applications can use data safely and consistently.",
    "Object-oriented programming": "OOP organizes code as objects that combine data and behavior through encapsulation, inheritance, polymorphism, abstraction, and dynamic binding.",
    "Python data analysis": "Python data analysis uses libraries and workflows for loading, cleaning, transforming, summarizing, and visualizing datasets.",
    "Pandas DataFrames": "A DataFrame is a labeled table; methods such as shape, info, describe, fillna, astype, groupby, and plotting support analysis.",
    "Machine learning types": "Learning types differ by feedback: labels for supervised learning, no labels for unsupervised learning, partial labels for semi-supervised learning, and rewards for reinforcement learning.",
    "Decision trees": "Decision trees choose splits that reduce class impurity using measures such as entropy, information gain, and Gini impurity.",
    "Ensemble learning": "Ensembles combine models: bagging trains parallel models, random forest adds feature sampling, and boosting trains sequential error-correcting models.",
    "Boosting": "Boosting builds learners sequentially so later models focus on errors made by earlier models; XGBoost is a common boosted-tree method.",
    "Association rules": "Association rules discover co-occurrence patterns; support measures frequency, confidence measures conditional reliability, and lift measures strength beyond chance.",
    "Clustering": "Clustering groups observations by similarity, so the distance measure and cluster validity criterion must match the data and question.",
    "Density clustering": "DBSCAN identifies dense regions and noise; a core point has enough neighbors within epsilon distance.",
    "Dimensionality reduction": "Dimensionality reduction summarizes many variables into fewer informative components, often to handle correlation or simplify interpretation.",
    "Neural networks": "Neural networks learn layered representations through weighted connections, nonlinear activations, and training against a loss function.",
    "Activation functions": "Activation functions introduce nonlinearity, allowing neural networks to learn relationships that linear models cannot capture.",
    "Neural network training": "Backpropagation computes gradients of the loss with respect to weights so the network can update itself during training.",
    "Model explainability": "Explainability methods such as SHAP connect model predictions back to feature contributions.",
    "Reinforcement learning": "Reinforcement learning studies agents that choose actions in an environment and learn from rewards over time.",
    "IoT communication": "IoT communication moves sensor data across networks; IP addresses devices and TCP/IP supports reliable transmission.",
    "Sensor conversion": "ADC converts continuous analog sensor signals into digital values that embedded systems can process.",
    "Sensing": "Sensors convert physical phenomena such as heat, motion, light, pressure, or pollution into measurable signals.",
    "Actuation": "Actuators turn control signals into physical actions such as movement, switching, opening, or closing.",
    "Arduino prototyping": "Arduino prototyping combines an IDE, microcontroller, libraries, sensors, actuators, and communication for hands-on IoT systems.",
    "Hotspot analysis": "Hotspot analysis identifies statistically significant spatial clustering of high or low values, often using z-scores.",
    "GIS queries": "A GIS query selects spatial features or attribute records that meet defined conditions.",
}


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


def short_answer_rule(topic: str) -> str:
    theory = TOPIC_THEORY.get(
        topic,
        "the answer must match the concept, operation, data type, relationship, or workflow in the question.",
    )
    first_sentence = theory.split(".")[0].strip()
    if not first_sentence.endswith("."):
        first_sentence += "."
    return first_sentence


def prompt_target(prompt: str) -> str:
    compact = prompt.strip().rstrip(".:?")
    if len(compact) > 150:
        return "the concept asked in this PDF question"
    return f"'{compact}'"


def is_reference_only(explanation: str) -> bool:
    lowered = explanation.lower().strip()
    return not lowered or lowered.startswith("refer to lecture")


def build_question_explanation(
    prompt: str,
    options: list[str],
    correct_indices: list[int],
    explanation: str,
    topic: str,
) -> str:
    correct_text = format_answer(correct_indices, options)
    target = prompt_target(prompt)
    theory = short_answer_rule(topic)

    if is_reference_only(explanation):
        return (
            f"Correct answer: {correct_text}. Why it is correct: it directly answers {target}. "
            f"Theory rule: {theory}"
        )

    return (
        f"Correct answer: {correct_text}. Why it is correct: {explanation} Theory rule: {theory}"
    )


def wrong_option_reason(topic: str, option: str) -> str:
    lowered = option.lower()
    rule = short_answer_rule(topic)

    mismatch_patterns = [
        (("only", "always", "all ", "entirely", "eliminates", "replaces"), "too absolute"),
        (("gis", "spatial", "shapefile", "map"), "GIS/spatial tooling"),
        (("cloud", "server", "platform"), "infrastructure/deployment"),
        (("sensor", "iot", "arduino", "actuator"), "hardware or sensing"),
        (("sql", "table", "database", "key", "normal"), "database mechanics"),
        (("python", "pandas", "dataframe", "library", "function"), "programming mechanics"),
        (("classification", "regression", "clustering", "model", "learning"), "a different ML task"),
        (("random forest", "boost", "xgboost", "bagging"), "the wrong ensemble idea"),
        (("entropy", "gini", "information gain"), "the wrong impurity/split idea"),
        (("support", "confidence", "lift"), "the wrong association-rule metric"),
        (("cnn", "rnn", "lstm", "ann"), "the wrong neural-network architecture"),
        (("ip", "tcp", "wpan", "wwan", "mqtt", "http"), "the wrong communication role"),
    ]

    for needles, reason in mismatch_patterns:
        if any(needle in lowered for needle in needles):
            return f"Do not choose: this points to {reason}. Correct reasoning: {rule}"

    if re.search(r"^[pqrs]-|[ivx]+", lowered) and "," in lowered:
        return f"Do not choose: this matching pairs at least one item with the wrong function. Correct reasoning: {rule}"

    return f"Do not choose: it does not express the asked concept. Correct reasoning: {rule}"


def build_option_explanations(
    prompt: str,
    options: list[str],
    correct_indices: list[int],
    explanation: str,
    topic: str,
) -> list[str]:
    correct_text = format_answer(correct_indices, options)
    theory = short_answer_rule(topic)
    feedback: list[str] = []

    for index, option in enumerate(options):
        if index in correct_indices:
            feedback.append(
                f"Choose this: it matches the concept. {theory}"
            )
            continue

        feedback.append(wrong_option_reason(topic, option))

    if not is_reference_only(explanation):
        feedback = [
            item if index not in correct_indices else f"{item} Extra clue: {explanation}"
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
            topic = infer_topic(week, prompt, options)

            bank.append(
                {
                    "week": week,
                    "number": number,
                    "marks": marks,
                    "source": pdf_name,
                    "sourceLabel": f"Week {week} assignment PDF",
                    "pdfDirect": True,
                    "topic": topic,
                    "prompt": prompt,
                    "options": options,
                    "correctIndices": correct_indices,
                    "multiSelect": len(correct_indices) > 1 or "select all" in prompt.lower(),
                    "pdfAnswer": answer_raw,
                    "explanation": build_question_explanation(prompt, options, correct_indices, explanation, topic),
                    "optionExplanations": build_option_explanations(prompt, options, correct_indices, explanation, topic),
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
