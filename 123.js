// const companies = {
//     epam: 12,
//     mobx: 2,
// }
//
// const addComp = (objName, company, rate) => objName[company] = rate
// addComp(companies, 'vixy', 4)
// console.log(companies);
// //----------------------------------------


// const str = 'HelloWorld'
// const arrFromStr = [...str]
// console.log(arrFromStr); //['H', 'e', 'l', 'l','o', 'W', 'o', 'r', 'l', 'd']
// //----------------------------------------
// function getInfo() {
//     // console.log(this.name + " " + this.age);
//     console.log(`${this.name} ${this.age}`);
// }

// const person = {
//     name: 'Andrei',
//     age: 36
// }

// getInfo.apply(person)

// const array = 'abc'
// const array = [1, 2, 3, 4, 5]

// const multBy = (arr, n) => {
//     return arr.map((iterator) => {
//         console.log(iterator * n)
//     })
// }
//multBy(array, 5)

//----------------------
// let a
// let b
//
// function myFn() {
//   let b
//   a = true
//   b = 10
//   console.log('b inside Fn', b)
// }
//
// myFn()
//
// console.log(a)
// console.log(b)

// inside Fn 10
// true
// undefined

//------------------------------

// const a  = 5;
//
// function myFn(){
//   function innerFn(){
//     console.log(a)
//   }
//   innerFn()
// }
//
// myFn()

//-------------------------------- переменная будет объявлена глобально!!! ошибки не будет, если не включет 'use strict'
// function myFn(){
//   a = 10;
//   console.log(a)
// }
// myFn() // 10
// console.log(a) // 10

//-------------
// const emptyObj = {}
// console.log(!!emptyObj) // true
//
// const emptyArr = []
// console.log(!!emptyArr) // true

//---------------------
// function newOne(a, b, c) {
//   console.log(arguments)
// }
// newOne(2, 4, 6)

//------------------
// const  str = 'Hello'
// for (let strElement in str) {
//   console.log(str[strElement])
// }

// const myPromise  = new Promise((res, rej) => {
//   res({
//     'AC/DC': 'Highway To Hell',
//     'Metallica': 'Unforgiven'
//   })
// })
// myPromise.then(data => console.log(data))
//----------------------------

const showMonth = (days) => {
  const currentMonth = {
    31: 'Jan',
    28: 'Feb',
    30: 'Mar',
  }
  return currentMonth[days] || 'Unknown';
}

const monthFor28Days = showMonth(28);
console.log(monthFor28Days);

