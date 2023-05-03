//1:
function insensitive_search(str1, str2) {
  return str1.toLowerCase().includes(str2)
}

//2:
function insensitive_search2(str1, str2) {
  let search_str = new RegExp(str2, 'ig')
  let result = str1.search(search_str)

  return (result > 0) ? 'Соответствует' : 'Не соответствует'
}

console.log(insensitive_search('Изучаю JavaScript', 'javascript'))
// Соответствует 
console.log(insensitive_search('Изучаю JavaScript', 'javascriptS'))
// Не соответствует  