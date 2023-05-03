const array = [1, 2, [55, 7, 7, [9, 0, -45]]]

//1:
//console.log(array.flat(Infinity))

//2:
const spreadArr = (arr) => {
  let res = []
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      //res.concat(spreadArr(item))
      res = [...res, ...spreadArr(item)]
    } else {
      res.push(item)
    }
  })
  return res
}

const result = spreadArr(array)
console.log(result)
