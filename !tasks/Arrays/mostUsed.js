let arr = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7]

function mostUsed(arr) {
  const store = {}

  arr.forEach(e => {
    store[e] = store[e] > 0 ? store[e] + 1 : 1
  })
  //return store //{ '3': 2, '5': 1, '7': 4, '9': 1, z: 5 }

  const entries = Object.entries(store).sort((a, b) => b[1] - a[1])
  //return entries // [ [ '5', 1 ], [ '9', 1 ], [ '3', 2 ], [ '7', 4 ], [ 'z', 5 ] ]

  return `${ entries[0][0] } встречается ${ entries[0][1] } раз.`
}

console.log(mostUsed(arr)) //z встречается 5 раз.
