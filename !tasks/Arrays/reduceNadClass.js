class myArray extends Array {
  sum() {
    return this.reduce((acc, item) => acc += item, 0)
  }
}

const numbers = new myArray(1, 2, 3, 4, 5)
console.log(numbers.sum()); //15