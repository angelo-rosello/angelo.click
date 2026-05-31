import os
import re

ROOT_DIR = ".."
HEADER_FILE = "../components/header.html"


# Read header component
with open(HEADER_FILE, "r", encoding="utf-8") as f:

    header_content = f.read().strip()


# Find all HTML files in root
for filename in os.listdir(ROOT_DIR):

    if not filename.endswith(".html"):
        continue

    filepath = os.path.join(ROOT_DIR, filename)

    with open(filepath, "r", encoding="utf-8") as f:

        html = f.read()


    # Replace existing <header>...</header>
    updated_html = re.sub(

        r"<header>[\s\S]*?</header>",

        header_content,

        html
    )


    with open(filepath, "w", encoding="utf-8") as f:

        f.write(updated_html)


    print(f"Updated header in: {filename}")


print("\nAll headers updated successfully.")