const array = [1, 2, 3, 4, 5]

const multBy = (arr, n) => {
    return arr.map((iterator) => {
        console.log(iterator * n)
    })
}
multBy(array, 5)
// -------------------------
//55639217, то на выход должно быть 5:563:921:7.

// const myFunk = (num) => {
//     return num.toString().split('')
//         .map((item, index, array) => array[index] % 2 == 1 && array[index + 1] % 2 == 1 ? item + ':' : item)
//         .join('')
// }
// console.log(myFunk(55639217))
// -------------------------

// const indexOfCapitals = (str) => {
//     //1:
//     // const res = []
//     // str
//     //     .split('')
//     //     .map((el, i) => {
//     //         el === el.toUpperCase() ? res.push(i) : ''
//     //     })
//     // return res
// }
// console.log(indexOfCapitals('CodEWaRs')); //0,3,4,6
// -----------------