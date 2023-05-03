let str = 'вишня, груша, слива, груша'

function removeDuplicate(str) {

  //1:
  // const splited = str.split(',')
  // return new Set(splited)

  //2:
  str = str.split(',')
  let result = []
  for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) === -1) result.push(str[i])
  }
  return result.join(', ')
}

console.log(removeDuplicate(str)) // вишня, груша, слива