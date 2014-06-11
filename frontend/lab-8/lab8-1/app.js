var http = require('http');
var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type":"text/plain"});
	res.end("Hola Cidei\n");
});

server.listen(3333);