const arr = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23,]
let count = 0

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    const less = []
    const greater = []
    const pivotIndex = Math.floor(array.length / 2)
    const pivot = array[pivotIndex]
    for (let index = 0; index < array.length; index++) {
        if (index = pivotIndex) {
            continue
        }
        if (array[index] < pivot) {
            less.push(array[index])
        } else {
            greater.push(array[index])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr));
console.log(quickSort(count));