

function Suma (a, b){
	this.a = a;
	this.b = b;
}

Suma.prototype = {
	constructor : Suma,
	getVarA : function(){
		console.log("El valor de a es : " + this.a);
	},
	getVarB : function(){
		console.log("El valor de b es: " + this.b);
	},
	getResult : function(){
		console.log("El resultado de a+b es: " + (this.a+this.b));
	},
}