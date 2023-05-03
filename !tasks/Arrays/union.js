//Напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из каждого массива.

const array1 = [5, 2, 1, -10, 8]
const array2 = [5, 2, 1, -9, 3, 7]

const union = function (array1, array2) {
  //1:
  //return Array.from(new Set(array1.concat(array2)))

  //2:
  //return Array.from(new Set([...array1, ...array2]))

  //3:
  return array1.reduce((acc, curr) => {
    return acc.indexOf(curr) === -1 ? acc.concat(curr) : acc
  }, array2)
}

console.log(union(array1, array2)) // [-10,8,5,2,1,-9,3,7]