var socket = io.connect('http://127.0.0.1:8585');

// en conexion con el servidor, pregunta el respectivo nombre de usuario y una devolucion anonima del llamado
socket.on('connect', function(){
	// llamada al evento, funcion (adduser) y le enviamos un parametro ingresado por el prompt
	socket.emit('adduser', prompt('Cual es su nombre de ususario'));
});

socket.on('updatechat', function(username, data){
	$('#conversation').append('<b>' + username + ': <b>' + data + '<br />');
});	

socket.on('updateusers', function(data){
	$('#users').empty();
	$each(data, function(key, value){
		$('#users').append('<div>' + key + '</div>' );
	});
});

$(document).ready(function(){
	$('#datasend').click(function(){
		var message = $('#data').val();

		socket.emit('sendchat', message);
	});

	$('#data').keypress(function(event){
		if(event.which === 13){
			$(this).blur();
			$('#datasend').focus().click();
		}
	});
});
