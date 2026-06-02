import os
import re

ROOT_DIR = ".."
HEADER_FILE = "../components/header.html"
INDEX_HEADER_FILE = "../components/index-header.html"


# Read header component
with open(HEADER_FILE, "r", encoding="utf-8") as f:

    header_content = f.read().strip()

with open(INDEX_HEADER_FILE, "r", encoding="utf-8") as f:

    index_header_content = f.read().strip()


# Find all HTML files in root
for filename in os.listdir(ROOT_DIR):

    if not filename.endswith(".html"):
        continue

    filepath = os.path.join(ROOT_DIR, filename)

    with open(filepath, "r", encoding="utf-8") as f:

        html = f.read()

        if filename == "index.html" :
            content = index_header_content
        else :
            content = header_content

    # Replace existing <header>...</header>
    updated_html = re.sub(

        r"<header>[\s\S]*?</header>",

        content,

        html
    )


    with open(filepath, "w", encoding="utf-8") as f:

        f.write(updated_html)


    print(f"Updated header in: {filename}")

