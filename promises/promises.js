//Пример промиса 1:
const promise = new Promise((resolve, reject) => {
    //throw new Error('user Error')
    if (true) {
        resolve({
            data: ['AC/DC', 'Metallica', 'Korn']
        })
    } else {
        reject()
    }
})

promise
    .then(data => console.log(data)) //Works !
    .catch(error => console.log(error)) //Error: user Error
//------------------------------------------

//Пример промиса 2:
const myPromise = new Promise((resolve, reject) => {
    console.log('Preparing data ...')
    setTimeout(() => {
        data = {
            server: 'Apache',
            port: '4434',
            status: 'working'
        }
        console.log('Done.')
        resolve(data)
    }, 1500)
})
myPromise
    .then(data => console.log('Data from server :', data))
    .catch(e => console.log(e))
//----------------------------------------------------

//ReferenceError: fetch is not defined - выкінет ошибку из за nodeJS, но здесь все ок
// fetch('https://api.chucknorris.io/jokes/random')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(() => console.log('... some error'))

//Пример промиса 3:
const load = () => {
    Promise.resolve(5)
        .then(a => {
            Promise.resolve(10)
                .then(b => {
                    console.log(a + b)
                })
        })
}
load() // 15

const load2 = async () => {
    const a = await Promise.resolve(5)
    const b = await Promise.resolve(10)
    console.log(a + b)
}
load2()
//-------------------------

const sleep = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Promis resolved after ${ms}`)
            resolve()
        }, ms)
    })
}

Promise.all([sleep(2000), sleep(4000)])
    .then(() => console.log('All promises resolved'))
//All отработает когда зарезолдвится все промісы из списка

Promise.race([sleep(2000), sleep(4000)])
    .then(() => console.log('All promises resolved'))
// Promis resolved after 2000
// All promises resolved
// Promis resolved after 4000
//Race отработает когда зарезолдвится первый промис из списка

//----------------------------------------------------------

// Можно использовать как отдельный модуль
const getData = (url) => {
    new Promise((resolve, reject) => {
        fetch(url) //const res = await fetch(url)
            .then(response => response.json)
            .then(data => resolve(data)) //const json = await res.json() return json
            .catch(error => reject(error))
    })
}

getData('http://test.com/35')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

//------------------------------------- задачка
// Math.renderGraph(source, (data) => { }, (err) => { }) // нужно переделать из колбеков на промисы
//
// const renderGraphAsync = function (source) {
//     return new Promise((resolve, rej) => {
//         Math.renderGraph(source, resolve, rej)
//     })
// }


//------------------------------------------
console.log(1); //код синхронный

const promise = new Promise((resolve, reject) => resolve(console.log(2))) //код синхронный сразу зарезолвится, здесь нету then

promise.then(num => console.log(3))

setTimeout(() => {
    console.log(4)
}, 0)

console.log(5) //код синхронный

// Порядок:
// 1
// 2
// 5
// 3
// 4
//https://youtu.be/F1MFhn2gawk?t=2072

//---------------------------------------- Promise.all example
const myTimer = (interval) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Interval is ${interval}s.`)
            resolve()
        }, interval)
    })
}

Promise.all([
    myTimer(1),
    Promise.resolve(console.log(`HTTP code 200`))
])