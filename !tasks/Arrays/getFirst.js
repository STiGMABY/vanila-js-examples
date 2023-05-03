//Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function getFirst(array, n) {
  return n !== undefined ? array.slice(0, n) : array.slice(0, 1)
}

function getLast(array, n = 1) {
  return array.slice(-n)
}

//function getFirst:
// console.log(getFirst(array))    // 1
// console.log(getFirst(array, 4)) // 1,2,3,4
// console.log(getFirst(array, -3)) // 1,2,3,4,5,6

//function getLast:
console.log(getLast(array))     // 9
console.log(getLast(array, 4))  // 6,7,8,9
console.log(getLast(array, 12)) // 1,2,3,4,5,6,7,8,9