//Напишите функцию replaceAll(find, replace, str),
// которая заменяет в строке str все вхождение подстроки find на подстроку replace.

let str = 'abc def def lom abc abc def'

function replaceAll(find, replace, str) {
  return str.replaceAll(find, replace)
}

console.log(replaceAll('abc', 'x', str)) // 'x def def lom x x def'