function unique_letters(str) {
  return str.split('').filter((val, _, str) => {
    return str.lastIndexOf(val) === str.indexOf(val)
  })
}

console.log(unique_letters('anaconda')) // c,o,d