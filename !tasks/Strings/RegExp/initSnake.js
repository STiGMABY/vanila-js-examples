function initSnake(str) {
  // Заменяем все заглавные буквы символом подчеркивания (_), а затем строчными буквами
  let newStr = str.replace(/[A-Z]/g, (letter) => {
    return `_${ letter.toLowerCase() }`
  })
  // Удаляем символ подчеркивания (_) в начале строки
  return newStr.replace(/^_/, '')
}

console.log(initSnake('HelloWorld')) // hello_world