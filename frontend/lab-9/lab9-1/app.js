var express = require('express'),
	app = express(),
	puerto = process.env.PORT || 8585,
	http = require('http'),
	server = http.createServer(app),
	io = require('socket.io').listen(server);

server.listen(puerto);
//console.log('server en el puerto ' + puerto);

app.use(express.static(__dirname));

app.get('/', function (req, res){
	res.sendfiled(__dirname + '/index.html');
});

//variable 'usernames' para los usuarios
var usernames = {};

io.sockets.on('connection', function(socket){
	// emision del cliente (broswer) emita el envion del evento (sentchat), este debe escuchar y ejecutar 
	socket.on('sendchat', function(data){
		// envio de 'emit' al cliente que ejecute (updatechat) con dos parametros (socket.usernames, data)
		io.sockets.emit('updatechat', socket.username, data);
	});

	socket.on('adduser', function(username){
		// almacena el nombre del ususario en la sesion y toma la info del cleinte
		socket.username = username;
		//adicionamos el usuario 'socket.username' al objeto 'usernames'
		usernames[username] = username;


		socket.broadcast.emit('updatechat', 'SERVER', username + 'esta conectado' );

		socket.emit('updatechat', 'SERVER', 'Usted esta conectado');
		io.sockets.emit('updateusers', usernames);

	});

	socket.on('disconect', function(){
		delete usernames[socket.username];
		io.sockets.emit('updateusers', usernames);
		socket.broadcast.emit('updatechat', 'SERVER', socket.username + 'Esta desconectado');
	});
});