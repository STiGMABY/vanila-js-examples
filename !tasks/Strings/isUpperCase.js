function isUpperCase(str, character) {

  //1:
  // const symbol =  str.slice(character, character + 1)
  // return symbol === symbol.toUpperCase()

  //2:
  return str.charAt(character) === str.charAt(character)
}

console.log(isUpperCase('tasks JavaScript', 6)) // true