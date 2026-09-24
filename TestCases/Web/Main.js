// Web test case - Login & Navigation
// Objects live in PageObjects (LoginPage, NavBar), NOT here.

function Test(params)
{
	// 1. Abrir login y autenticar con credenciales del entorno
	LoginPage_Open();
	LoginPage_DoLogin(g_env.credentials.validUser, g_env.credentials.validPassword);

	// 2. Verificar acceso
	LoginPage_IsLoggedIn();

	// 3. Navegar el menu superior completo
	NavBar_ClickPractice();
	NavBar_ClickCourses();
	NavBar_ClickAIWorkshop();
	NavBar_ClickHome();
	Navigator.Open("https://practicetestautomation.com/practice-test-login/");
	SeS('Username').DoClick();
	SeS('Username').DoClick();
	SeS('Username').DoSetText("student");
	SeS('Password').DoClick();
	SeS('Password').DoSetText("Password123");
	SeS('Submit').DoClick();
	SeS('Log_out').DoClick();
	SeS('Username').DoClick();
	SeS('Username').DoSetText("student1");
	SeS('Password').DoClick();
	SeS('Password').DoSetText("Password1234");
	SeS('Submit').DoClick();
	Tester.AssertEqual("Verify that: InnerText=Your username is invalid!", SeS('Your_username_is_invalid!').GetInnerText(), "Your username is invalid!");
	Tester.AssertEqual("Verify that: Text=Your username is invalid!", SeS('Your_username_is_invalid!').GetText(), "Your username is invalid!");
	RVL.DoPlayScript("Main.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
}

g_load_libraries = ["Selenium"];
