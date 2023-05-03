function cutString(str, n) {
  const res = []
  for (let i = 0; i < str.length; i = i + n) {
    console.log(i) // 0 3 6 9
    res.push(str.substr(i, n))
  }
  return res
}

function cutString2(str, n) {
  //return str.match(/.{1,3}/g)
  return str.match(new RegExp('.{1,' + n + '}', 'g'))
}

// console.log((cutString('наслаждение', 3))) // [нас,лаж,ден,ие])
console.log((cutString2('наслаждение', 3))) // [нас,лаж,ден,ие])