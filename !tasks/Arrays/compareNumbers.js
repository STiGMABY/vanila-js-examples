//Напишите функцию compareNumbers(arr), которая возвращает массив, элементы которого отсортированы по убыванию их значений.

const numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1]

function compareNumbers(arr) {
  //1:
  //return arr.sort()

  //2:
  // for (let i = 0; i < arr.length - 1; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     const a = arr[i]
  //     const b = arr[j]
  //     if (a > b) {
  //       arr[i] = b
  //       arr[j] = a
  //     }
  //   }
  }

  console.log(compareNumbers(numbers)) // -4,1,2,3,3,5,6,7,8