var animal = function () {
	this.name = "Animalia";
	this.skeleton = true;
	this.skin = true;
	this.legs = 4;
	this.eyes = 2;
	this.ears = 2;
	this.reproduce = true;
}

var panthera = function (){
	this.genusName = "panthera"
	this.fur = true;
	this.roar = true;
	this.food = "carnivore";
	this.offspring = "cubs";
}
panthera.prototype = new animal();

var tigris = function() {
	this.speciesName = "tigris"
	this.head ="short and broad";
	this.coat = "striped";
	this.minWeight = "75kg"
}

tigris.prototype = new panthera();

var tiger = new tigris();
tiger.name = "Leo";
console.log(tiger);

var pongo = function (){
	this.genusName = "pongo";
	this.thumb = true;
	this.tail = false;
}

pongo.prototype = new animal();

var orangutan = function (){
	this.name = "pygmaeus";
	this.size = "large";
	this.home = "treetops"
}

orangutan.prototype = new pongo();
var orangutan1= new pongo();
console.log(orangutan1);