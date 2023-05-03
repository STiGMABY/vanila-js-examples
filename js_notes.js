// const companiesRate = {
//     exadel: 35,
//     epam: 20,
// }

// console.log(companiesRate)

// function addCompany(obj, name, rates) {
//     return obj[name] = rates
// }

// addCompany(companiesRate, 'pipe', 12)

// console.log(companiesRate)

//-------------------------
// const emptyObj = {} // true
// const emptyArr = [] // true

// console.log(!!emptyObj);
// console.log(!!emptyArr);
//--------------------------

// const user = {
//     name: 'Andrei',
//     age: 36,
//     isProgrammer: true
// }

// const checkUser = ({ name, age, isProgrammer }) => {
//     !isProgrammer
//         ? console.log(`User ${name} is not programmer`)
//         : console.log(`${name} is ${age} and he is a programmer`)
// }

// checkUser(user)
//--------------------------

class myArray extends Array {
    sum() {
        return this.reduce((acc, item) => acc += item, 0)
    }
}

const numbers = new myArray(1, 2, 3, 4, 5)
console.log(numbers.sum()); //15