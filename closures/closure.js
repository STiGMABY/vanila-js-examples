const linkCreator = (domen) => (url) => {
    return function () {
        console.log(`www.${url}.${domen}`)
    }
}

const com = linkCreator('com')
const by = linkCreator('by')
com('google')()
com('fbi')()
by('tut')()

//-------------------------------
const linkCreator2 = (domen) => {
    return function (url) {
        console.log(`www.${url}.${domen}`)
    }
}

const biz = linkCreator2('biz')
biz('fitness')

//-----------------------------------
const greeting = (phrase) => {
    return function (name) {
        console.log(`${phrase} ${name}`)
    }
}

const phraze = greeting('Fuck you')
phraze('Bob')
//-----------------------------------------

//Написать свою функцию bind
function catInfo() {
    console.log(`This is ${this.name} his color is ${this.color} he is ${this.age}`)
}

const catOne = { name: 'Ted', color: 'white', age: 3 }
const catTwo = { name: 'Lucky', color: 'black', age: 1 }

function myOwnBind(ctx, fn) {
    return function (...args) {
        fn.apply(ctx, args)
    }
}
//Не забываем вызвать bind
myOwnBind(catOne, catInfo)()
myOwnBind(catTwo, catInfo)()

//-------------------------
// Given an integer n, return a counter function. This counter function initially
// returns n and then returns 1 more than the previous value every subsequent time it
// is called (n, n + 1, n + 2, etc).

let createCounter = function (n) {
    return function (){
        console.log(n)
        n++
    }
}

const counter = createCounter(-2)
counter() //-2
counter() // -1
counter() // 0
counter() // 1
// -------------------------
const a  = 5;

function myFn(){
    function innerFn(){
        console.log(a)
    }
    innerFn()
}

myFn() // closure, inner scoupe