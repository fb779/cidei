var puerto = 3434;
var http = require('http');
var logic = require('./logic');

var server = http.createServer(function(req, res){
	logic.loadParameters(req, res, undefined);

	if (req.requrl.pathname === '/'){
		require('./home').get(req, res);
	} else if(req.requrl.pathname === '/squared'){
		require('./squared').get(req,res);
	} else if(req.requrl.pathname === '/divide'){
		require('./divide').get(req,res);
	} else{
		res.writeHead(404, {'Content-Type' : 'text/plain'});
		res.end('Error 404' + req.url);
	}
});

server.listen(puerto);
console.log('server en el puerto ' + puerto);