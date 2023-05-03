//Убрать дубликаты
function removeDupes(str) {
    const res = []
    map = {}
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (!map[char]) {
            map[char] = true
            res.push(char)
        }
    }
    return res
}

console.log(removeDupes('aacdd')) // -> true
console.log(removeDupes('12347759337')) // -> true
console.log(removeDupes('abcABC')) // -> true
console.log(removeDupes('abcaacdefc')) // -> false