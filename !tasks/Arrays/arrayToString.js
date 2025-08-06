//Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
//Элементы массива будут разделены запятой. Получите результат двумя разными методами.

let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка']

function arrayToString(arr) {

  //1:
  // return arr.join(',')

  //2:
  // return arr.toString()
  
  //3:
  // return ''.concat(arr)
}

const res = arrayToString(vegetables)

console.log(res)
console.log(typeof res) //string
