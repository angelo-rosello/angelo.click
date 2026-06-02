import json
import re

from datetime import datetime


VERSION_FILE = "../data/version.json"
INDEX_FILE = "../index.html"


# ============================================
# LOAD CURRENT VERSION
# ============================================

with open(
    VERSION_FILE,
    "r",
    encoding="utf-8"
) as f:

    data = json.load(f)


current_version = data["version"]


print()
print("Current version :", current_version)
print()

new_version = input(
    "New version (leave blank to keep current): "
).strip()


if new_version == "":

    new_version = current_version


today = datetime.now().strftime("%d/%m/%y")


# ============================================
# UPDATE JSON
# ============================================

data["version"] = new_version
data["updated"] = today


with open(
    VERSION_FILE,
    "w",
    encoding="utf-8"
) as f:

    json.dump(
        data,
        f,
        indent=4,
        ensure_ascii=False
    )


# ============================================
# UPDATE INDEX.HTML
# ============================================

footer_text = (

    f"{new_version}"
    f" - updated {today}"

)


with open(
    INDEX_FILE,
    "r",
    encoding="utf-8"
) as f:

    html = f.read()


html = re.sub(

    r'<div id="site-version">.*?</div>',

    f'''

<div id="site-version">

    {footer_text}

</div>

''',

    html,

    flags=re.DOTALL

)


with open(
    INDEX_FILE,
    "w",
    encoding="utf-8"
) as f:

    f.write(html)


print()
print(
    f"Updated to {new_version}"
)
print(
    f"Date: {today}"
)
print()