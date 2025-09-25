const companies2 = {
    exadel: 4,
    godel: 10
}
const addCompanyRating = (obj, company, rating) => obj[company] = rating
addCompanyRating(companies2, `intex`, 5)
console.log(companies2)
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
// ------------------------
// const showMonth = (days) => {
//   const currentMonth = {
//     31: 'Jan',
//     28: 'Feb',
//     30: 'Mar',
//   }
//   return currentMonth[days] || 'Unknown';
// }
//
// const monthFor28Days = showMonth(28);
// console.log(monthFor28Days);