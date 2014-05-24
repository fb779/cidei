/* Callback en JS */

/*
un callback es una funcion, que por parametro se le envia otra funcion,
y la funcion que lo recibe, espera a que esta ejecute esa funcion.


*/


function algo (miCallback){
	miCallback();
}

algo(function(){
	console.log("esto es un callback");
});

function otroCallback(miCallback){
	miCallback("un argumento");
}

otroCallback(function(unValor){
	console.log("Algo se imprime y es: "+unValor);
});