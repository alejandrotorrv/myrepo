function Mammal(order, family, genus, species){
    this.order = order;
    this.family = family;
    this.genus = genus;
    this.species = species;
};

Mammal.prototype.getFullClassification = function() {
    return `${this.species}.${this.genus}.${this.family}.${this.order}`;
};

function Dog(name, breed, dob){
    Mammal.call(this, "Carnivora", "Canidae", "Canis", "Canis Lupus");

    this.name = name;
    this.breed = breed;
    this.dob = new Date(dob);
}

//Herencia de Prototype
Dog.prototype=Object.create(Mammal.prototype);
// set constructor
Dog.prototype.constructor= Dog;
let coco = new Dog("coco", "pug", "1/January/2011");
console.log(coco);
console.log(`Mammal classification: ${coco.getFullClassification()}`);

//override getFullClassification
Dog.prototype.getFullClassification = function() {
    return `${this.name}.${this.breed}.${this.species}.${this.genus}.${this.family}.${this.order}`;
}
console.log(`Dog classification: ${coco.getFullClassification()}`);