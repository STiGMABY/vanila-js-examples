const str = 'HelloWorld'
const arrFromStr = [...str]
console.log(arrFromStr); //['H', 'e', 'l', 'l','o', 'W', 'o', 'r', 'l', 'd']
// ---------------------------

const str = 'just a line'
for (const strKey in str) {
    console.log(str[strKey])
}
// -------------------------------
// const shortestWord = (str) => {
//     //1:
//     //return str.split(' ').sort((a,b) => a.length - b.length)[0]

//     //2:
//     //return str.split(' ').reduce((curr, next) => curr.length > next.length ? next : curr)
// }
// console.log(shortestWord('Here we need find short word'));
// --------------------------

// const isEqual = (str1, str2) => {
//     newStr1 = str1.split('')
//     newStr2 = str2.split('')
//     return newStr1.sort().join('') === newStr2.sort().join('')
// }
// dog dgo //true
//dog dfo //false
//doog ddog //false
// -----------------------------