const companies = {
    IBM: 50,
    Microsoft: 20,
    Intel: 45,
}

//когда мы не знаем имя добаляемого свойства
function addStock(objProperty, value) {
    companies[objProperty] = value
}
addStock('Apple', 10)

console.log(companies); //{ IBM: 50, Microsoft: 20, Intel: 45, Apple: 10 }
// -----------------------------------------

//ОБЪЕДИНЕНИЕ
const target = { x: 1 }
const source = { y: 2, z: 3 }

for (const key of Object.keys(source)) {
    target[key] = source[key]
    //console.log(target[key])
}

console.log(target) //{ x: 1, y: 2, z: 3 }
//-------------------------------------------

const person = new Object({
    name: 'XXX',
    age: 42,
    greet() {
        console.log('Hello !')
    }
})
person.greet()
Object.prototype.getAge = function () { console.log(this.age) }
person.getAge() //42

const BoniaTheCat = Object.create(person)
BoniaTheCat.name = 'Bonia'
console.log(BoniaTheCat.name)
// ------------------------------------------------

// PropertyDescriptors - еслі создать об'ект через Object.create то forin не проитерирует
// потому, что например
// enumerable: false по умолчанию
// configurable: true - говорит, что мы можем удалять ключ из объекта
const kitty = Object.create({}, {
    name: {
        value: 'cat',
        enumerable: true,
        writable: true,
        configurable: true,
    },
    birthDate: {
        value: 2020
    },
    age: {
        get() {
            return console.log(new Date().getFullYear() - this.birthDate)
        }
    }
})

for (const key in kitty) {
    console.log('Key :', key)
}

kitty.age //2