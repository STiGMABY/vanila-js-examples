let numbers = [10, 5, 100, 28977, 1000, 2065];
let letters = ['v', 'c', 'a', 'f', 'b', 'z']

const max = numbers.reduce((acc, val) => {
    return acc > val ? acc: val
}, numbers[0])
console.log("Max vak is:", max)

const  sortedNumbers = numbers.sort((a,b) => a - b)
console.log("Sorted numbers arr:", sortedNumbers)

const sortedLetters = letters.sort()
console.log("Sorted letters", sortedLetters)

let keyValuePairs = [['key1','value1'], ['key2','value2'], ['key3','value3']]
const toObj = keyValuePairs.reduce((acc, [key, value] ) => {
    return {...acc, [key]: value}
}, {})
console.log('Array arrays to Obj:', toObj)



