function comparison(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase()
}

console.log(comparison('string', 'StRiNg')) // true
console.log(comparison('ABCDe', 'AbcdW'))   // false