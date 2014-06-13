var http = require("http");
var querystring = require("querystring");
var url = require("url");


var port = 8888;

function onRequest(request, response){
	addContentTypeHtml(response)
	addFromHeaderToBody(response);
	addBody(request, response);
	addFromBodyToEnd(response);
	response.end();
}


function addContentTypeHtml(response){
	response.writeHead(200, {"Content-Type": "text/html"});
}

function addFromHeaderToBody(response){
	response.write("<html><head><title>Node response!</title></head><body>");	
}

function addBody(request, response){
	
	var op = querystring["op"]; // url. .parse(querystring, true).query["op"];

	//console.log(url.parse(querystring, true).query["op"]);

	response.write(op);

	// if (querystring["op"] == "full")
	// 	for (var i in request){
	// 		response.write("key: " + i + ' val: ' + request[i] + "<br>");
	// 	}
	// 	else{
	// 		response.write("shiao");
	// 	}
}

function addFromBodyToEnd(response){
	response.write("</body></html>");
}

http.createServer(onRequest).listen(port);

