function alphabetize(str) {
  return str.split('').sort().join('')
}
console.log(alphabetize('Europe')) // Eeopru


let numArray = [140000, 104, 0, -3, 99]
numArray.sort((a, b) => a - b)
console.log(numArray) //[ -3, 0, 99, 104, 140000 ]
