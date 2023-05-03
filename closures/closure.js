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