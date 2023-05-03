const str = 'abba'

const str2 = 'hello'

function palindom(str){
  const reversed = str.split('').reverse().join('') === str
  return reversed === str

}

console.log(palindom(str))