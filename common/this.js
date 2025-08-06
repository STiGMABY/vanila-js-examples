const array = [1, 2, 3, 4, 5]

const multBy = (arr, n) => {
    return arr.map(item => {
        return item * n
    })
}
//console.log(multBy(array, 2)) //[ 2, 4, 6, 8, 10 ]

//Как сделать так, что бы каждый раз не приходилось вызывать два аргумента?

Array.prototype.multBy = function (n) {
    //console.log('What is this? ', this)
    return this.map(function (i) {
        return i * n
    })
}
//array.multBy() //What is this?  [ 1, 2, 3, 4, 5 ] this это  и есть сам массив 
console.log(array.multBy(3)) //[ 3, 6, 9, 12, 15 ]
//-----------------------------------------------------------
