// //55639217, то на выход должно быть 5:563:921:7.

// const myFunk = (num) => {
//     return num.toString().split('')
//         .map((item, index, array) => array[index] % 2 == 1 && array[index + 1] % 2 == 1 ? item + ':' : item)
//         .join('')
// }
// console.log(myFunk(55639217))


// const shortestWord = (str) => {
//     //1:
//     //return str.split(' ').sort((a,b) => a.length - b.length)[0]

//     //2:
//     //return str.split(' ').reduce((curr, next) => curr.length > next.length ? next : curr)
// }
// console.log(shortestWord('Here we need find short word'));


// const sumDigits = (num) => {
//     //1:
//     // const absolute = Math.abs(num)
//     //     .toString()
//     // return eval(+absolute[0] + +absolute[1])

//     //2:
//     return Math.abs(num)
//         .toString()
//         .split('')
//         .reduce((acc, elem) => Number(acc) + Number(elem))
// }
// console.log(sumDigits(99)); // 18
// console.log(sumDigits(-32)); // 5


// const minMax = (num) => {
//     //return [Math.min(...num), Math.max(...num)]
//     return [Math.min.apply(null, num), Math.max.apply(null, num)]
// }
// console.log(minMax([34, 67, 12, 3354, 83]));

// const indexOfCapitals = (str) => {
//     //1:
//     // const res = []
//     // str
//     //     .split('')
//     //     .map((el, i) => {
//     //         el === el.toUpperCase() ? res.push(i) : ''
//     //     })
//     // return res

//     //2:
//     return str.split('').reduce((result, letter, index) => {
//         if (letter === letter.toUpperCase()) { result.push(index) }
//         return result
//     }, [])
// }
// console.log(indexOfCapitals('CodEWaRs')); //0,3,4,6


// const fooBar = (num) => {
//     //1:
//     // for (let i = 1; i <= num; i++) {
//     //     if (i % 3 === 0) console.log(`foo`)
//     //     else if (i % 5 === 0) console.log(`bar`)
//     //     else if (i % 3 === 0 && i % 5 === 0) console.log(`foobar`)
//     //     else console.log(i)
//     // }
// }
// console.log(fooBar(15));


// function uniteUnique()  {
//     return [...new Set([...arguments].flat())]
// }
console.log(uniteUnique([1, 2, 3], [4, 1, 5], [6, 7, 8, 5]))
