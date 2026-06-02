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
WEBSITE UPDATE ROUTINE
======================

The website is updated entirely by through:

update_site.bat

This script automatically:

* rebuilds writings.json
* rebuilds music.json
* updates all shared headers
* updates the website version information
* commits changes to GitHub
* pushes changes to GitHub

To publish a new version:

1. Double-click:

update_site.bat

2. The script will ask for:

New version name:

Examples:

v1.0
summer archive
winter update
etc.

Leave blank to keep the current version.

3. The script will then display all modified files.

4. The script will ask for:

Commit message:

This is the message that will appear on GitHub.

Examples:

Added new piano pieces
Updated guestbook
Mobile layout improvements

5. The script automatically commits and uploads all changes.

Git only uploads files that have changed.
Existing audio files and images are NOT re-uploaded.

Only:

* modified files
* newly added files
* deleted files

are synchronized with GitHub.

After the upload completes, GitHub Pages automatically updates the website online.

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

3. Save the file.

4. Run:

update_site.bat

The script automatically rebuilds:

/data/writings.json

and uploads the changes.

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

3. Add any required:

* audio files
* cover images

4. Run:

update_site.bat

The script automatically rebuilds:

/data/music.json

and uploads:

* new audio files
* new image files
* updated JSON data

=========================================================
UPDATING THE HEADER
===================

The shared header component is stored inside:

/components/header.html
/components/index-header.html (specific to the index page)

Whenever this file is modified:

Simply run:

update_site.bat

The script automatically propagates the updated header
to all HTML pages before publishing.

=========================================================
VERSION SYSTEM
==============

The current website version is stored inside:

/data/version.json

Whenever update_site.bat is executed:

* the version name may be changed
* the last update date is refreshed automatically

The current version and update date are displayed
on the homepage footer.


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
