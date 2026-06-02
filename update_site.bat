@echo off

echo.
echo ==========================================================
echo RUNNING PYTHON SCRIPS TO UPDATE JSONs, HEADERS AND VERSION
echo ==========================================================
echo.

@echo off

cd scripts

python build_music.py
python build_writings.py
python update_header.py
python update_version.py

cd ..

echo.
echo =================================================
echo CONTENT OF THE UPDATE
echo (M=modified, A=added, D=deleted, ??=untracked)
echo =================================================
echo.

git status --short

echo.
echo ==========================================
echo COMMIT MESSAGE
echo ==========================================
echo.

set /p msg=Name this update for Github log:

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

echo Commit finished.

echo.
echo ==========================================
echo PUSHING
echo ==========================================
echo.

git push

echo Push finished.

echo.
echo ==========================================
echo DONE
echo ==========================================
echo.

pause