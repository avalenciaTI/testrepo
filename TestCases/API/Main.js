// API test case - Examples against jsonplaceholder.typicode.com (public mock REST API)
// Base url comes from the environment config: g_env.apiBaseUrl (Configuration\Environments\QA.json)

function Test(params)
{
	Example1_GetListOfPosts();
	Example2_GetSinglePost();
	Example3_PostReturns201();
	Example4_FilteredQuery();
	Example5_ResponseSchema();
}

/** Ejemplo 1 - GET coleccion: status 200 y lista no vacia */
function Example1_GetListOfPosts()
{
	var res = ApiRequest("GET", g_env.apiBaseUrl + "/posts");
	Tester.Assert("GET /posts returns 200", res.status == 200, "status=" + res.status);
	var posts = ApiResponseJson(res);
	Tester.Assert("GET /posts returns non-empty array", posts && posts.length > 0,
		"count=" + (posts ? posts.length : 0));
}

/** Ejemplo 2 - GET recurso individual: campos correctos */
function Example2_GetSinglePost()
{
	var res = ApiRequest("GET", g_env.apiBaseUrl + "/posts/1");
	Tester.Assert("GET /posts/1 returns 200", res.status == 200, "status=" + res.status);
	var post = ApiResponseJson(res);
	Tester.Assert("post id is 1", post && post.id == 1);
	Tester.Assert("post has userId, title and body",
		post && post.userId != undefined && post.title != undefined && post.body != undefined);
}

/** Ejemplo 3 - POST crear recurso: 201 y eco del payload */
function Example3_PostReturns201()
{
	var payload = { title: "Televisa API test", body: "created by Rapise", userId: 101 };
	var res = ApiRequest("POST", g_env.apiBaseUrl + "/posts", payload);
	Tester.Assert("POST /posts returns 201", res.status == 201, "status=" + res.status);
	var created = ApiResponseJson(res);
	Tester.Assert("created title matches payload", created && created.title == payload.title);
	Tester.Assert("new resource has an id", created && created.id != undefined);
}

/** Ejemplo 4 - Query params: todos los hijos de un post */
function Example4_FilteredQuery()
{
	var res = ApiRequest("GET", g_env.apiBaseUrl + "/comments?postId=1");
	Tester.Assert("GET /comments?postId=1 returns 200", res.status == 200, "status=" + res.status);
	var comments = ApiResponseJson(res);
	Tester.Assert("comments array returned", comments && comments.length > 0);
	var allMatch = true;
	for (var i = 0; i < comments.length; i++) {
		if (comments[i].postId != 1) allMatch = false;
	}
	Tester.Assert("every comment belongs to postId=1", allMatch, "received=" + comments.length);
}

/** Ejemplo 5 - Validacion de esquema: tipos de datos esperados */
function Example5_ResponseSchema()
{
	var res = ApiRequest("GET", g_env.apiBaseUrl + "/users/1");
	Tester.Assert("GET /users/1 returns 200", res.status == 200, "status=" + res.status);
	var user = ApiResponseJson(res);
	Tester.Assert("user.id is number", typeof user.id == "number");
	Tester.Assert("user.name is string", typeof user.name == "string");
	Tester.Assert("user.email contains @", user.email && user.email.indexOf("@") > 0, user.email);
	Tester.Assert("user.address has city", user.address && user.address.city != undefined);
}

// sin librerias adicionales: las llamadas HTTP usan ActiveXObject (MSXML2.XMLHTTP)
g_load_libraries = [];
