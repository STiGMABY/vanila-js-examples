str = 'hEllo woRld'

//1:
function initCap(str) {
  const splited = str.split(' ')
  const arr = []
  for (let i = 0; i < splited.length; i++) {
    const formatted = `${ splited[i].charAt(0).toLocaleUpperCase() }${ splited[i].toLowerCase().slice(1) }`
    arr.push(formatted)
  }
  return arr.join('')
}

//2:
function initCap2(str) {
  return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
    return m.toUpperCase().replace(/\s+/g, '')
  })
}

console.log(initCap(str)) // HelloWorld