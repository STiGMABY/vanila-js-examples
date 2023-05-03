//Сумма элементов двух массивов

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [4, 5, 6]

function twoArraysSum(arr1, arr2) {
  return [...arr1, ...arr2].reduce((acu, item) => acu += item)
}

console.log(twoArraysSum(arr1, arr2))