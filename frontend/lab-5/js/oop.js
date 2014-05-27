/* Programacion Orienada a Objetos */

function Person (firstName, lastName, profession, gener, age, city){
	this.firstName = firstName;
	this.lastName = lastName;
	this.profession = profession;
	this.gener = gener;
	this.age = age;
	this.city = city;
	this.studies = [];
}

Person.prototype = {
	constructor : Person,
	getFirstName : function(){
		console.log("El Primer nombre es: " + this.firstName);
	},

	getLastName : function(){
		console.log("El Primer nombre es: " + this.lastName);
	},

	getProfession : function(){
		console.log("El Primer nombre es: " + this.profession);
	},

	getGenere : function(){
		console.log("El Primer nombre es: " + this.gener);
	},

	getAge : function(){
		console.log("El Primer nombre es: " + this.age);
	},

	getCity : function(){
		console.log("El Primer nombre es: " + this.city);
	},

	getStudies : function(){
			
		var i = 0;
		/*for (i < this.studies.length; i++) {
			
			console.log("Tiene estudios en : " + this.studies[i]);
		}*/

		for (i in this.studies) {
		 	console.log("Tiene estudios en : " + this.studies[i]);
		 }
	}
}



function Animal (animalName,gener,age,species,numberZoo,zooName){
	this.animalName = animalName;
	this.gener = gener;
	this.age = age;
	this.species = species;
	this.numberZoo = numberZoo;
	this.zooName = zooName;
}

Animal.prototype = {
	constructor : Animal,
	getAnimalName : function(){
		console.log("El nombre es: " + this.animalName);
	},

	getGener : function(){
		console.log("El genero es: " + this.gener);
	},

	getAge : function(){
		console.log("La edad es: " + this.age);
	},

	getSpecie : function(){
		console.log("La especie es: " + this.species);
	},

	getNumberZoo : function(){
		console.log("Numero del zoologico: " + this.numberZoo);
	},

	getZooName : function(){
		console.log("Nombre del zoologico es: " + this.zooName);
	}
}
