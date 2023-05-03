const factorial = (num) => {
    if (num <= 1) { return 1 }
    else { return num * factorial(num - 1) }
}

console.log(factorial(5))
// -------------------------

const factorial2 = (n) => n ? n * factorial2(n - 1) : 1
console.log(factorial2(6))