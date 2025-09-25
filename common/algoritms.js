const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0

function binarySearch(array, item) {
    let start = 0
    let end = array.length
    let found = false
    let position = -1
    let middle
    while (found === false && start <= end) {
        count += 1
        middle = Math.floor((start + end) / 2)
        if (array[middle] === item) {
            found = true
            position = middle
            return position
        }
        if (item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position
}
console.log(binarySearch(array, 3))
// ----------------------

const fooBar = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log('foobar');
        else if (i % 3 === 0) console.log('foo');
        else if (i % 5 === 0) console.log('bar');
        else console.log(i);
    }
};

const fooBar2 = (num) => {
    for (let i = 1; i <= num; i++) {
        switch (true) {
            case i % 3 === 0 && i % 5 === 0:
                console.log('foobar');
                break;
            case i % 3 === 0:
                console.log('foo');
                break;
            case i % 5 === 0:
                console.log('bar');
                break;
            default:
                console.log(i);
        }
    }
};

fooBar(15);


fooBar(15);
