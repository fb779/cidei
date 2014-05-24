function Abecedario (){
	this.abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	this.voc = ["a","e","i","o","u"];
}

Abecedario.prototype = {
	constructor : Abecedario,
	getConsonantes : function(){
		var rta = [];
		var flag = 0;
		//console.log("Iniciamos en i="+i+" y J="+j);
		for (var i=0; i<this.abc.length ; i++) {
			for (var j=0; j<this.voc.length && flag==0; j++) {
//				console.log("Abc: "+this.abc[i]+" Vocal: "+this.voc[j]);
				if (this.abc[i] !== this.voc[j]){
					flag = 1;
					rta.push(this.abc[i]);
					console.log("Consonantes: "+this.abc[i]);			
				}	
			}
			flag = 0;	
		}	
		console.log("Consonantes: "+rta);
	},
}