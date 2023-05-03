let litmir = [
  {author: 'Хэленка', title: 'Улетела сказка'},
  {author: 'Коул Кресли', title: 'Восстание Аркан'},
  {author: 'Райчел Мид', title: 'Золотая лилия'},
  {author: 'Some author', title: 'Азбука жизни'},
]

//1:
// function compare(a, b) {
//   if (a.title < b.title) return -1
//   if (a.title > b.title) return 1
//   else return 0
// }
//
// function sortTitlesInArray(array) {
//   array.sort(compare)
//   for (let i = 0; i < litmir.length; i++) console.log(litmir[i].title)
// }

//2:
function sortTitlesInArray(array) {
  const sorted = array.sort((a, b) => a.title > b.title ? 1 : -1)
  return sorted.forEach(e => console.log(e.title))
}

console.log(sortTitlesInArray(litmir)) // Азбука жизни Восстание Аркан Золотая лилия Улетела сказка

//----------------------------