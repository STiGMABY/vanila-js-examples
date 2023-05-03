let str = 'Астрономия — Наука о небесных телах'

function getSubstr(str, char, pos) {
  //1:
  switch (pos) {
    case 'after':
      return str.slice(str.indexOf(char) + 1)
    case 'before':
      return str.slice(0, str.indexOf(char))
  }

  //2:
  // if (pos === 'after') // после
  //   return str.slice(str.indexOf(char) + 1)
  // else if (pos === 'before') // до
  //   return str.slice(0, str.indexOf(char))
  // else
  //   return str

  //3:
  // let index = str.indexOf(char);
  // return pos === 'before' ? str.slice(0, index) : str.slice(index + 1)
}

console.log(getSubstr(str, '—', 'after')) // Наука о небесных телах
console.log(getSubstr(str, 'Н', 'before')) // Астрономия —