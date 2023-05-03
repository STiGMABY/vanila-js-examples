let data = [1, 2, 3, 4, 5]
const doubled = []
data.forEach((element, index, array) => {
    array[index] = element + 1
    doubled.push(array[index])
})
console.log(doubled) //[ 2, 3, 4, 5, 6 ]