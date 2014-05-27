/* Objetos y funciones */
var myObject = new Object();

var myObject = {};

//los array tambien son objetos

var lotter = [2,4,6,8,0];

profile = {
	_firstName : "Mi Nombre",
	_lastName : "Mi Segundo Nombre",
	_phone : "Mi telefono"
}

console.log(profile._firstName);
console.log(profile["_lastName"]);

/* Funciones */

function test (){ //funcion normal
	console.log("que hubo parcerooo");	
}

test(); //llamado de una funcion normal

var chao = function (){ //funcion anonima
	console.log("Funcion anonima");		
}

chao(); //llamado de una funcion anonima