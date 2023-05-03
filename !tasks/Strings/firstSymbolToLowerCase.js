let str = 'Пример строки'

function firstSymbolToLowerCase(str) {
  return `${str.charAt(0).toLowerCase()}${str.slice(1)}`
}

console.log(firstSymbolToLowerCase(str)) // пример строки