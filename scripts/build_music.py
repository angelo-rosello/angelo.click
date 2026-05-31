import os
import json
import re

MUSIC_DIR = "../music"
OUTPUT_FILE = "../data/music.json"

entries = []


# =========================================================
# FRENCH TYPOGRAPHY
# =========================================================

def french_typography(text):

    replacements = {

        " !": "&nbsp;!",
        " ?": "&nbsp;?",
        " :": "&nbsp;:",
        " ;": "&nbsp;;"
    }

    for old, new in replacements.items():

        text = text.replace(old, new)


    # French guillemets

    text = re.sub(

        r'"([^"]+)"',

        r'«&nbsp;\1&nbsp;»',

        text
    )

    return text


# =========================================================
# TEXT → HTML
# =========================================================

def convert_text_to_html(text, lang):

    paragraphs = text.strip().split("\n\n")

    html_paragraphs = []

    for paragraph in paragraphs:

        paragraph = paragraph.strip()

        if not paragraph:
            continue


        # Raw HTML block
        if paragraph.startswith("<"):

            html_paragraphs.append(paragraph)

            continue


        # Manual line breaks
        paragraph = paragraph.replace("\\\\", "<br>")


        # French typography
        if lang == "fr":

            paragraph = french_typography(paragraph)


        html_paragraphs.append(

            f"<p>{paragraph}</p>"
        )

    return "\n".join(html_paragraphs)


# =========================================================
# DATE PARSING
# =========================================================

def parse_date(date_str):

    try:

        month, year = date_str.split("/")

        return (

            int(year),

            int(month)
        )

    except:

        return (0, 0)


# =========================================================
# PROCESS FILES
# =========================================================

for filename in os.listdir(MUSIC_DIR):

    if not filename.endswith(".txt"):
        continue


    filepath = os.path.join(

        MUSIC_DIR,

        filename
    )


    with open(filepath, "r", encoding="utf-8") as f:

        content = f.read()


    parts = content.split("---", 1)

    if len(parts) != 2:
        continue


    metadata_block = parts[0]

    body = parts[1]


    metadata = {}

    for line in metadata_block.splitlines():

        line = line.strip()

        if ":" not in line:
            continue


        key, value = line.split(":", 1)

        metadata[key.strip()] = value.strip()


    html_content = convert_text_to_html(

        body,

        metadata.get("lang", "en")
    )


    metadata["content"] = html_content


    entries.append(metadata)


# =========================================================
# SORT NEWEST FIRST
# =========================================================

entries.sort(

    key=lambda x: parse_date(

        x.get("date", "00/00")
    ),

    reverse=True
)


# =========================================================
# EXPORT JSON
# =========================================================

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:

    json.dump(

        entries,

        f,

        indent=4,

        ensure_ascii=False
    )


print("music.json updated successfully")