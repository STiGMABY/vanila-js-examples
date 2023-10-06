
// console.log(undefined == 0); //false
// console.log(undefined === 0); //false
// console.log(undefined >= 0); //false
// console.log(null >= 0); //true
// console.log(false == 0); // true
// console.log(false === 0); // false



// console.log('script start')
// setTimeout(function () {
//     console.log('setTimeout')
// }, 0)
//
// Promise.resolve()
//     .then(function () { console.log('promise 1') })
//     .then(function () { console.log('promise 2') })
// console.log('script end')

// script start
// script end
// promise 1
// promise 2
// setTimeout



// function Dog(name){
//     this.name = name
// }
// Dog.prototype.bark = function() {
//     console.log(this.name + ' says woof');
// }
//
// let fido = new Dog('Fido')
// console.log(fido.bark())



// dog dgo //true
//dog dfo //false
//doog ddog //false
// const isEqual = (str1, str2) => {
//     newStr1 = str1.split('')
//     newStr2 = str2.split('')
//     return newStr1.sort().join('') === newStr2.sort().join('')
// }

// console.log(isEqual('dog', 'dgo'))
// console.log(isEqual('dog', 'dfo'))
// console.log(isEqual('doog', 'zddog'))



// const promise = new Promise((res, rej) => {
//     if (true) {
//         return res('Promise resolved!')
//     }
// })
//     .then((data) => console.log(data))
//     .finally(console.log('filally'))


// const obj = {
//     'a': {
//         'b': 1
//     }
// }
// console.log('obj --> ', obj);

// const obj2 = Object.assign({}, obj)
// obj2.a.b = 2
// console.log('obj --> ', obj);
// console.log('obj2 --> ', obj2)


const bikes = [
    { bike: 'Honda', color: 'orange' },
    { bike: 'Suzuki', color: 'blue' },
    { bike: 'Kawasaki', color: 'green' },
    { bike: 'Yamaha', color: 'red' },
]

let bikesCopy = Array.from(bikes, ({ bike }) => bike)
console.log(bikesCopy) //[ 'Honda', 'Suzuki', 'Kawasaki', 'Yamaha' ]
