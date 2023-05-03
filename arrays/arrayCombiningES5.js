const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 10]
Array.prototype.push.apply(arr1, arr2)
console.log(arr1) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
