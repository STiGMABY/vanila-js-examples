const bikes = [
    { bike: 'Honda', color: 'orange' },
    { bike: 'Suzuki', color: 'blue' },
    { bike: 'Kawasaki', color: 'green' },
    { bike: 'Yamaha', color: 'red' },
]

let bikesCopy = Array.from(bikes, ({ bike }) => bike)
console.log(bikesCopy) //[ 'Honda', 'Suzuki', 'Kawasaki', 'Yamaha' ]
//------------------------

//FLATTEN ARRAY
const companies = {
    IBM: 50,
    Microsoft: 20,
    Intel: 45
}

const res = Object.entries(companies) //[ 'IBM', 50, 'Microsoft', 20, 'Intel', 45 ]
const flat = [].concat(...res)
console.log(flat);

//------------------------
const arrOfcreate = Array.of(1, 2, 3) // [1,2,3]
const arrCopy = Array.from(arrOfcreate) // создаст новый массив, без сылки на родителя!
//------------------------

// let letters = [...'Just a phrase']
// const newPhrase = ''
// for (let [index, letter] of letters.entries()) {
//     if (index % 2 === 0) newPhrase += letter
// }
// console.log(newPhrase)
//------------------------ ?????????????????????????

//ТАБЛИЦА УМНОЖНИЯ
let table = new Array(10)
console.log(table) //[ <10 empty items> ]
//Создание многомерного массива
for (let i = 0; i < table.length; i++) {
    table[i] = new Array(10)
}
//Инициализация
for (let row = 0; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {
        table[row][col] = row * col
    }
}
console.log(table[4][4])

//------------------------ SORT
const rand = [5, 44, 2, 89, 0]
const randResult = rand.sort((a, b) => a - b)
console.log(randResult) //[ 0, 2, 5, 44, 89 ]