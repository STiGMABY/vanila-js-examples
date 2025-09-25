function getInfo() {
    console.log(this.name + " " + this.age);
    console.log(`${this.name} ${this.age}`);
}

const person = {
    name: 'Andrei',
    age: 36
}

getInfo.apply(person)
// ---------------------------