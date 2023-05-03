function* myGenerator() {
    yield 2
    yield 5
    yield 7
}

const runGen = myGenerator()
console.log(runGen.next()); //{ value: 2, done: false }
console.log(runGen.next()); //{ value: 5, done: false }
console.log(runGen.next()); //{ value: 7, done: false }
console.log(runGen.next()); //{ value: undefined, done: true }


console.log(runGen[Symbol.iterator]()) //Object [Generator] {}

console.log([...myGenerator()]) //[ 2, 5, 7 ]
// ---------------------------------

function* myGenerator2() {
    let result = (yield) * 2
    console.log(result)
}
const iter2 = myGenerator2()
console.log(iter2.next())
console.log(iter2.next(2))
// { value: undefined, done: false }
// 4
// { value: undefined, done: true }
//----------------------------------------

function* rangeGen(start, end) {
    let current = start
    while (current <= end) {
        yield current++
    }
}

for (const num of rangeGen(1, 10)) {
    console.log(num)
}