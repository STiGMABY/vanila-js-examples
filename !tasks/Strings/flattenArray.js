const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const arr5 = [1, 2, , 4, 5]; // arr5.flat() // [1, 2, 4, 5]

function flattenArray(array) {
    //1:
    //console.log(array.flat(Infinity)) // flat(depth)

    //2:  only single level array
    // const res = array.reduce((acu, val) => acu.concat(val), []) //  [1, 2, [3, 4]]
    // console.log(res)

    //3:  only single level array
    //console.log([].concat(...array))

    //4:
    const res = []
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            const flat = flattenArray(array[i])
            for (let j = 0; j < flat.length; j++) {
                res.push(flat[j])
            }
        }
        else res.push(array[i])
    }
    console.log(res)
    return res
}

flattenArray(arr)