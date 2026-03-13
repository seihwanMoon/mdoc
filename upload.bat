@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

cd /d "%~dp0"

echo ========================================
echo DOCS + IMAGE AUTO PUBLISH
echo ========================================
echo.

echo [CHECK] current status
git status
echo.

for /f "delims=" %%i in ('powershell -NoProfile -Command "Get-Date -Format \"yyyy-MM-dd HH:mm:ss\""') do set "COMMIT_TIME=%%i"
set "COMMIT_MSG=docs update %COMMIT_TIME%"

echo [INFO] Commit message: %COMMIT_MSG%
echo.

echo [STEP 1] docs, static/img, script files staging...
git add docs static/img .gitattributes upload.bat

if errorlevel 1 (
    echo [ERROR] git add 실패
    pause
    exit /b 1
)

echo.
echo [STEP 2] staged 변경사항 확인...
git diff --cached --quiet
if %errorlevel%==0 (
    echo [INFO] 커밋할 변경사항이 없습니다.
    pause
    exit /b 0
)

echo.
echo [STEP 3] commit...
git commit -m "%COMMIT_MSG%"

if errorlevel 1 (
    echo [ERROR] commit 실패
    pause
    exit /b 1
)

echo.
echo [STEP 4] push...
git push origin main

if errorlevel 1 (
    echo [ERROR] push 실패
    pause
    exit /b 1
)

echo.
echo [DONE] 문서와 이미지가 정상적으로 업로드되었습니다.
pause
endlocal