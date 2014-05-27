function Abecedario (){
	this.abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	this.voc = ["a","e","i","o","u"];
}

Abecedario.prototype = {
	constructor : Abecedario,
	getAbc : function(){
		console.log("Abecedario: " + this.abc);
		console.log("Abecedario: " + this.abc.length);
	},
	getVoc : function(){
		console.log("Vocales: " + this.voc);
		console.log("Vocales: " + this.voc.length);
	},
	getConsonantes : function(){
		var rta = [];
		var flag = 0;
		console.log("Abecedario: "+this.abc.length);
		for (var i=0; i<this.abc.length ; i++) {
			if ((this.abc[i]!=="a") || (this.abc[i] !== "e") || (this.abc[i] !== "i") || (this.abc[i] !== "o") || (this.abc[i] !== "u")){
				console.log("Entramos al if Consonantes: "+this.abc[i]);
				rta.push(this.abc[i]);
				console.log(rta);
			}


			/*for (var j=0; j<this.voc.length ; j++) {
				console.log("Entrada Valor de i: "+i+" Valor de j: "+j+" Flag: "+flag);
				//console.log(this.abc[i]+" = "+this.voc[j]);
				if (this.voc[j] !== this.abc[i]){
					flag = 1;
					rta.push(this.abc[i]);
					//console.log("Entramos al if Consonantes: "+this.abc[i]);
				}else{
					console.log("Entramos al else Consonantes: "+this.abc[i]);
				}	
				console.log("Salida Valor de i: "+i+" Valor de j: "+j+" Flag: "+flag);
			}
			flag = 0;	*/
		}	
//		console.log("Consonantes: "+rta);
	},
}