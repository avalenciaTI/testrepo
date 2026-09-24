/**
 * @PageObject NavBar
 * Top navigation menu shared by every page of the site.
 * Locators are text/href based (not positional //li[N]) so they survive menu reordering.
 */
SeSPageObject("NavBar");

/**
 * Click Home and verify the menu is still available on the new page
 */
function NavBar_ClickHome()
{
	Home.Click();
	var ok = Home.Exists(15000);
	Tester.Assert("Home page loaded", ok);
	return ok;
}

/**
 * Click Practice and verify navigation completed
 */
function NavBar_ClickPractice()
{
	Practice.Click();
	var ok = Practice.Exists(15000);
	Tester.Assert("Practice page loaded", ok);
	return ok;
}

/**
 * Click Courses and verify navigation completed
 */
function NavBar_ClickCourses()
{
	Courses.Click();
	var ok = Courses.Exists(15000);
	Tester.Assert("Courses page loaded", ok);
	return ok;
}

/**
 * Click AI Workshop and verify navigation completed
 */
function NavBar_ClickAIWorkshop()
{
	AI_Workshop.Click();
	var ok = AI_Workshop.Exists(15000);
	Tester.Assert("AI Workshop page loaded", ok);
	return ok;
}
