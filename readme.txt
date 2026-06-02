# angelø — README

=========================================================
LOCALHOST TESTING
=================

Some JavaScript features used on the website
(fetching JSON files, dynamic loading, etc.)
require a local server to function properly.

To locally test the website:

1. Open the root folder of the project

2. Right click
   → "Open in terminal"

3. Run:

python -m http.server 8000

4. Open a browser and go to:

http://localhost:8000/index.html

=========================================================
WEBSITE ADDRESS
===============

Main website:

https://angelo.click

=========================================================
SERVICES USED
=============

DOMAIN NAME:
Hostinger

HOSTING:
GitHub Pages

FORMS / EMAILS:
Web3Forms

=========================================================
GITHUB UPDATE ROUTINE
=====================

After modifying the website locally:

1. Open the GitHub Desktop application
   (or use git manually)

2. Commit the changes

3. Push to GitHub

The website updates automatically online.

=========================================================
ADDING NEW WRITINGS
===================

1. Create a new .txt file inside:

/writings

2. Use the metadata structure:

title:
date:
type:
lang:
description:

---

(content)

3. Open the /scripts folder

4. Run:

python build_writings.py

This automatically updates:

/data/writings.json

5. Push to GitHub:

* the updated writings.json
* any new images/audio files if needed

IMPORTANT:
The .txt source files themselves do NOT need
to be uploaded to GitHub.

=========================================================
ADDING NEW MUSIC
================

1. Create a new .txt file inside:

/music

2. Use the metadata structure:

title:
date:
tags:
lang:
description:
audio:
image:

---

(content)

3. Open the /scripts folder

4. Run:

python build_music.py

This automatically updates:

/data/music.json

5. Push to GitHub:

* the updated music.json
* all new audio files
* all new image files

IMPORTANT:
The .txt source files themselves do NOT need
to be uploaded to GitHub.

=========================================================
UPDATING THE HEADER
===================

The shared header component is stored inside:

/components/header.html

Whenever this file is modified:

1. Open the /scripts folder

2. Run:

python update_header.py

This automatically propagates the updated header
to all HTML pages.

=========================================================
GUESTBOOK WORKFLOW
==================

The guestbook is manually curated.

VISITOR SIDE:

* Visitors submit the form
* Web3Forms sends an email notification

EMAIL CONTENT:
The email contains:

* name
* message
* optional website
* date
* a ready-made JSON snippet

MODERATION ROUTINE:

1. Read the email

2. If the message is appropriate,
   copy the provided JSON snippet

3. Paste it into:

/data/guestbook.json

IMPORTANT:
Maintain proper JSON syntax:

* commas between entries
* no trailing comma after the final entry

4. Push the updated guestbook.json to GitHub

=========================================================
IMPORTANT FILES
===============

Main stylesheet:

/style.css

Main scripts:

/scripts

Generated JSON content:

/data

Reusable HTML components:

/components
