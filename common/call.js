function showFullName(arg1) {
    console.log(this.firstName + ' ' + this.lastName + ' ' + arg1)
}
const userData = {
    firstName: 'Andrei',
    lastName: 'Kazuk'
}
console.log(showFullName.call(userData, 'JS')) //Andrei Kazuk JS

//------------------------------
catMusia = {
    name: 'Musia',
    age: 4,
    getInfo() { return this.name + ' ' + this.age },
    sayMeow: function () { return console.log(this.name + ' said meow !') }
}

console.log(catMusia.getInfo()) // Musia 4

catBonia = {
    name: 'Bonia',
    age: 3
}

let boniaTheCat = catMusia.getInfo.call(catBonia)
console.log(boniaTheCat) // Bonia 3
//let boniaTheCat = catMusia.sayMeow.call(catBonia) // ???? undefined с вызовом sayMeow


//--------- The call() Method with Arguments
const person = {
    getFullInfo: function (city, country) {
        return this.name + ' ' + this.surname + ' ' + city + ' ' + country
    }
}

const thePeson = {
    name: 'Andrei',
    surname: 'Kazuk'
}

const res = person.getFullInfo.call(thePeson, 'Grodno', 'Belarus')
console.log(res)