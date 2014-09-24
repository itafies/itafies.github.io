$(document).ready(function (){
	var url = "http://rocky-reef-6522.herokuapp.com/eventos";
	var xhr = createCORSRequest('GET', url);
	if (!xhr) {
		throw new Error('CORS not supported');
	}

	xhr.onload = function() {
		var responseText = xhr.responseText;
		console.log(responseText);
		// process the response.
	};

	xhr.onerror = function() {
		console.log('There was an error!');
	};
	
	xhr.send();
 })
 
 function mostrarEventos(response) {
	var arr = JSON.parse(response).eventos;
	var i;
	var out = "";

	for(i = 0; i < arr.length; i++) {
		out += "<a href=\"#\" class=\"navbar-brand\"><hr>";
		out += /*"<h1>" + arr[i].NombreEvento + "<h1>" +*/ "<br><br>Lugar: " + arr[i].lugar + "<br>Precio: " + arr[i].precio + "<br>";
		out += "<hr></a><br>";
	}
	$("#events").html(out);
}

function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr) {

		// Check if the XMLHttpRequest object has a "withCredentials" property.
		// "withCredentials" only exists on XMLHTTPRequest2 objects.
		xhr.open(method, url, true);

	} else if (typeof XDomainRequest != "undefined") {

		// Otherwise, check if XDomainRequest.
		// XDomainRequest only exists in IE, and is IE's way of making CORS requests.
		xhr = new XDomainRequest();
		xhr.open(method, url);

	} else {

		// Otherwise, CORS is not supported by the browser.
		xhr = null;

	}
	return xhr;
}
