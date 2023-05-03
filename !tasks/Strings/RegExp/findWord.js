let str = 'abc def ghi jkl mno pqr stu'

function findWord(word, str) {
  //1:
  // return new RegExp('\\b' + word + '\\b').test(str)

  //2:
  return str.includes(word)
}

console.log(findWord('mno', str)) // true