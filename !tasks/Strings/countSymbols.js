let symb = 'о'
const str = 'Астрономия это наука ооо небесных объектах'

//не забываем, что о русское !== о английское

function count(str, symb) {
  //1:
  return str.split('').filter(symbol => symbol === symb).length
}

console.log(count(str, symb)) // 7