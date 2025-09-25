const nestedArr = [
    1,2,
    [2,3,4,4567],
    [[56],[6758]]
]

const flatted = nestedArr.flat(Number.POSITIVE_INFINITY)
console.log(flatted)
// ----------------