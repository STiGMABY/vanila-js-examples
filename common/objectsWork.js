const companiesRate = {
    exadel: 35,
    epam: 20,
}

console.log(companiesRate)

function addCompany(obj, name, rates) {
    return obj[name] = rates
}

addCompany(companiesRate, 'pipe', 12)

console.log(companiesRate)

//-------------------------
const emptyObj = {} // true
const emptyArr = [] // true

console.log(!!emptyObj);
console.log(!!emptyArr);
//--------------------------

const user = {
    name: 'Andrei',
    age: 36,
    isProgrammer: true
}

const checkUser = ({ name, age, isProgrammer }) => {
    !isProgrammer
        ? console.log(`User ${name} is not programmer`)
        : console.log(`${name} is ${age} and he is a programmer`)
}

checkUser(user)
//--------------------------

// const bikes = [
//     { bike: 'Honda', color: 'orange' },
//     { bike: 'Suzuki', color: 'blue' },
//     { bike: 'Kawasaki', color: 'green' },
//     { bike: 'Yamaha', color: 'red' },
// ]
//
// let bikesCopy = Array.from(bikes, ({ bike }) => bike)
// console.log(bikesCopy) //[ 'Honda', 'Suzuki', 'Kawasaki', 'Yamaha' ]
//
// const newArrWithBikes = bikesCopy.map(item => `copied ${item}`)
// console.log(newArrWithBikes) // [ 'copied Honda', 'copied Suzuki', 'copied Kawasaki', 'copied Yamaha' ]
// ------------------------------

