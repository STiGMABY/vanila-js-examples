const myFact = (n) => {
    if (n === 1) return 1
    return n * myFact(n - 1)
}

console.log(myFact(5))