// load http module
var http = require("http");

http.createServer(function (request, response) {
	// send http header
	response.writeHead(200, {'Content-Type': 'application/json'});
	// send response body
	response.end(JSON.stringify({"message": "Hello!"}));
}).listen(8081);

// confirmation of running server
console.log('server running at localhost:8081');
