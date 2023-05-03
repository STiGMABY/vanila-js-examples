//Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.
let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка']

function arrayClone(arr) {

  //1:
  //return arr.slice(0)

  //2:
  //return arr.map(item => item) //map не изменяет исходный массив, а возвращает новый

  //3:
  //return [...arr]
}

let clonedVegetables = arrayClone(vegetables)
clonedVegetables[0] = 'banana'

console.log(vegetables) // ['Капуста', 'Репа', 'Редиска', 'Морковка']
console.log(clonedVegetables)