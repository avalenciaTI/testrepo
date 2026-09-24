// API test case - HTTP helpers (reusable functions)
// Uses MSXML2.XMLHTTP (ActiveXObject), the standard REST approach in Rapise JScript.

/**
 * Execute an HTTP request and return {status, body}
 * @param {String} method GET | POST | PUT | DELETE
 * @param {String} url full endpoint url
 * @param {Object} body optional payload object (sent as JSON)
 */
function ApiRequest(method, url, body)
{
	var http = new ActiveXObject("MSXML2.XMLHTTP");
	http.open(method, url, false);
	http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	http.setRequestHeader("Accept", "application/json");
	if (body) {
		http.send(JSON.stringify(body));
	} else {
		http.send();
	}
	return { status: http.status, body: http.responseText };
}

/**
 * Parse a JSON response body safely
 * @param {Object} response result of ApiRequest
 */
function ApiResponseJson(response)
{
	var data = null;
	try { data = JSON.parse(response.body); } catch (e) { data = null; }
	return data;
}
