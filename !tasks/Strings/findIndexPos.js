const array = ['a', 'b', 'a', 'c', 'a', 'd']
const indecies = []

function findIndexPos(value) {
  let idx = array.indexOf(value)
  while (idx !== -1){
    indecies.push(idx)
    idx = array.indexOf(value, idx + 1)
  }
  return indecies
}

console.log(findIndexPos('a'))