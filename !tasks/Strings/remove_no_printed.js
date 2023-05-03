//Напишите функцию remove_no_printed(str), которая удаляет из строки все символы,
// которые не относятся к печатаемым символам ASCII

let str = 'JAVA谷新道ひばヶ丘２丁���ひばりヶ���東久留米市SCRIPT'

function remove_no_printed(str) {
  //1:
  return str.match(/\w/g).join('')

  //2:
  //return str.replace(/[^\x20-\x7E]/g, '')
}

console.log(remove_no_printed(str)) // JAVASCRIPT

//К печатным относятся символы, которые лежат в диапазоне от
// \x20 hex-код символа «пробел» до \x7e hex-код символа «~» (тильда) character