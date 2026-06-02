@echo off

echo.
echo =================================================
echo RUNNING PYTHON SCRIPS TO UPDATE JSONs AND HEADERS
echo =================================================
echo.

@echo off

cd scripts

python build_music.py
python build_writings.py
python update_header.py

cd ..

echo.
echo =================================================
echo CONTENT OF THE UPDATE
echo (M=modified, A=added, D=deleted, ??=untracked)
echo =================================================
echo.

git status --short

echo.
set /p msg=Describe this update: 

if "%msg%"=="" (
    set msg=site update
)

git add .

git commit -m "%msg%"

git push

pause

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