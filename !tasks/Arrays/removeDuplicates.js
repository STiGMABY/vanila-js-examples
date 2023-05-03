//Напишите функцию removeDuplicates(arr), которая возвращает массив,
// в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).

let arr = ['php', 'php', 'css', 'css',
  'script', 'script', 'html', 'html', 'java']

function removeDuplicates(arr) {
  const filtered = []
  return arr.filter((string, index, array) => {
    return filtered.includes(array[index]) ? null : filtered.push(string)
  })
}

console.log(removeDuplicates(arr))  // [php,css,script,html,java]