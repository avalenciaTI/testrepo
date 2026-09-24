If /I "%Processor_Architecture%" NEQ "x86" (
%SystemRoot%\SysWoW64\cmd.exe /C %0
goto :eof
)
SET SMARTESTUDIO_TEST_FOLDER=%~dp0
if not defined WSCRIPTENGINE set WSCRIPTENGINE="C:\Program Files (x86)\Inflectra\Rapise\Bin\..\Engine\InstrumentJS\node.exe" "C:\Program Files (x86)\Inflectra\Rapise\Bin\..\Engine\InstrumentJS\NodeWScript.js"
pushd "%SMARTESTUDIO_TEST_FOLDERS%..\..\."
SET SMARTESTUDIO_TEST_FOLDERS=%SMARTESTUDIO_TEST_FOLDER:\=\\%
"C:\Program Files (x86)\Inflectra\Rapise\Bin\..\Engine\play.bat" "%SMARTESTUDIO_TEST_FOLDER%Test.sstest" "-eval:g_modifierKeys='None'" "-eval:g_verboseLevel=1" "-eval:g_browserLibrary='Selenium - Chrome'" "-config:%SMARTESTUDIO_TEST_FOLDERS%..\..\.LastConfig.json.user" "-eval:g_rapiseAiDashboardPort=51926"
popd
