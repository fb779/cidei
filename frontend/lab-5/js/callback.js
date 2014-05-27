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

/* MUltiples Callbacks llamando en determinado caso */

function algoOcurre (callback1, callback2, callback3){
	callback1("Primer paso");

	callback2("Segundo paso");

	callback3("ultimo y Tercer paso");	
}

algoOcurre(
	function(paso1){
		console.log(paso1);
	},
	function(paso2){
		console.log(paso2);
	},
	function(paso3){
		console.log(paso3);
	}
);

