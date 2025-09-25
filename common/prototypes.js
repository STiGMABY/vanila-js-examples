function Dog(name){
    this.name = name
}
Dog.prototype.bark = function() {
    console.log(this.name + ' says woof');
}

let fido = new Dog('Fido')
console.log(fido.bark())