// Пользователь вводит многозначное число через promt.
// Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента
// и вставляет двоеточие (:) между двумя нечетными числами.
// Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.

//const num = prompt('Введите число', 55639217)

function colonOdd(num) {

  //1:
  // let str = num.toString()
  // let result = [str[0]]
  // for (let i = 1; i < str.length; i++) {
  //   (str[i] % 2 !== 0 && str[i - 1] % 2 !== 0)
  //     ? result.push(':', str[i])
  //     : result.push(str[i])
  // }
  // return result.join('')

  //2:
  return num
    .toString()
    .split('')
    .map((item, index, array) => array[index] % 2 !== 0 && array[index + 1] % 2 !== 0
      ? `${ item }:`
      : item,
    )
    .join('')

  //3:
  // return num
  //   .toString()
  //   .split('')
  //   .reduce((accumulator, currentValue, index, array) => {
  //     // let current = Number(currentValue)
  //     let current = array[index]
  //     let next = array[index + 1]
  //     return accumulator += current + (current % 2 !== 0 && next % 2 !== 0 ? ':' : '')
  //   }, '')
}

console.log(colonOdd(55639217)) // 5:563:921:7