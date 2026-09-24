// Functions and global variables shared across all test cases.
// NOTE: g_env is provided by Configuration\Environments\EnvLoader.js (registered as shared).

/**
 * Run this code before each test case.
 */
SeSOnTestInit(function() {
	if (g_entryPointName == "Test") {
		// Make sure the environment configuration was loaded
		if (!g_env || !g_env.baseUrl) {
			Tester.Assert("Environment configuration is not loaded", false);
		}
	}
});

/**
 * Run this code after each test case.
 */
SeSOnTestFinish(function() {
	if (g_entryPointName == "Test") {
		// Common finalization code here
	}
});
