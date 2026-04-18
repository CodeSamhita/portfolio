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
                    "prompt": prompt,
                    "options": options,
                    "correctIndices": correct_indices,
                    "multiSelect": len(correct_indices) > 1 or "select all" in prompt.lower(),
                    "explanation": explanation,
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
