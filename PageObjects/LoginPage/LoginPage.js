/**
 * @PageObject LoginPage
 * Page object for the Test Login page (practicetestautomation.com).
 * Owns objects: Username, Password, Submit, LoggedInBanner (see Objects.js in this folder).
 */
SeSPageObject("LoginPage");

/**
 * Open the login page and verify the form is ready
 */
function LoginPage_Open()
{
	Navigator.Open(g_env.loginUrl);
	var ready = Username.Exists(15000);
	Tester.Assert("Login form is ready", ready);
	return ready;
}

/**
 * Fill credentials and submit the login form
 * @param {String} user login user
 * @param {String} password login password
 */
function LoginPage_DoLogin(user, password)
{
	Username.SetText(user);
	Password.SetText(password);
	Submit.Click();
	return true;
}

/**
 * Verify the login succeeded (Logged In Successfully banner is visible)
 */
function LoginPage_IsLoggedIn()
{
	var ok = LoggedInBanner.Exists(15000);
	Tester.Assert("User is logged in", ok);
	return ok;
}
