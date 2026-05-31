PYTHON SCRIPT BUILD_WRITINGS :
- Creates HTML files from text files (auto paragraph when empty line, line break when "\\" is used)
- Updates the JSON file with the HTML content of the writings and their meta-data

PYTHON SCRIPT UPDATE_HEADER :
Goes through every html file in the root folder, and replaces the <header> content with that of the file /components/header.
Run it everytime the header is edited, or anytime a new html page is created in the root folder.


USAGE :
- In the root folder, right click and "Open in terminal"
- Type (for instance :) python build_writings.py