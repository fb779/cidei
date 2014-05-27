// var valores = [3,5,4,6,7,8,9,1,2];


function Variables (){
	this.valores = [3,5,4,6,7,8,9,1,2];
	this.suma = 0;
	this.multi = 1;
	this.i = 0;
}

Variables.prototype = {
	constructor : Variables,
	getValore : function(){
		constructorole.log("Los Valores son : " + this.valores);
	},

	getSuma : function(){
		for (i in this.valores) {
			this.suma += this.valores[i];
		};		
		console.log("El valor de la suma es: " + this.suma);
	},
	getMultiplicacion : function(){
		for (i in this.valores){
			this.multi *= this.valores[i];
		}
		console.log("El valor de la multiplicacion es : " + this.multi);
	},
}