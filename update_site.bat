@echo off

echo.
echo ==========================================
echo BUILDING WEBSITE
echo ==========================================
echo.

python scripts/build_music.py
python scripts/build_writings.py
python scripts/update_header.py

echo.
echo ==========================================
echo CHANGED FILES
echo ==========================================
echo.

git status --short

echo.
echo ==========================================
echo COMMIT MESSAGE
echo ==========================================
echo.

set /p msg=Describe this update:

if "%msg%"=="" (
    set msg=site update
)

echo.
echo ==========================================
echo COMMITTING
echo ==========================================
echo.

git add .

git commit -m "%msg%"

echo.
echo ==========================================
echo PUSHING TO GITHUB
echo ==========================================
echo.

git push

echo.
echo ==========================================
echo DONE
echo ==========================================
echo.

pause