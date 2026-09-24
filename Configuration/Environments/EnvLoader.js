// Loads the active environment config into the global "g_env" object.
// The active environment name is defined in environment.txt (fallback: QA).
var g_env = {};

(function EnvLoader_Init()
{
	var workDir = "";
	try {
		if (typeof SMARTESTUDIO_TEST_FOLDER != "undefined" && SMARTESTUDIO_TEST_FOLDER) {
			workDir = SMARTESTUDIO_TEST_FOLDER;
		}
	} catch (e) {}
	if (!workDir) {
		try { workDir = SeSWorkingFolder(); } catch (e2) {}
	}
	if (!workDir) workDir = ".";
	workDir = ("" + workDir).replace(/\\/g, "/");
	if (workDir.charAt(workDir.length - 1) != "/") workDir += "/";
	function envFile(name) {
		return workDir + "Configuration/Environments/" + name;
	}
	var envName = "QA";
	if (File.Exists(envFile("environment.txt"))) {
		var txt = "" + File.Read(envFile("environment.txt"));
		txt = txt.replace(/[^A-Za-z0-9_]/g, "");
		if (txt) envName = txt;
	}
	var cfgPath = envFile(envName + ".json");
	if (!File.Exists(cfgPath)) {
		throw new Error("Environment config not found: " + envName + ".json (Configuration\\Environments)");
	}
	var raw = "" + File.Read(cfgPath);
	g_env = eval("(" + raw + ")");
	Log("Environment loaded: " + g_env.environment + " -> " + g_env.baseUrl);
})();
