function insert(str, substr, pos) {

  //return str.split('').splice(pos, 0, substr) // Не сработает

  //1:
  // const arr = str.split('')
  // arr.splice(pos, 0, substr)
  // return arr.join('')

  //2:
  //return substr === undefined ? str : str.slice(0, pos) + substr + str.slice(pos)
}

console.log(insert('Казнить нельзя')) // Казнить нельзя
console.log(insert('Казнить нельзя', 'Помиловать ')) // Помиловать Казнить нельзя
console.log(insert('Казнить нельзя', 'Помиловать ', 8)) // Казнить Помиловать нельзя

//splice(start, deleteCount, item1, item2, itemN)