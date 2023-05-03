function zeros(num, len, sign) {
  const numbersCount = num.toString().length
  const zerosCount = len - (Number(numbersCount))
  const zerosLengthToZeros = Array(zerosCount).fill(0).join('')

  console.log(`${ sign ? sign : '' }${ zerosLengthToZeros }${ num }`)
}

console.log(zeros(145, 6, '-')) // -000145
console.log(zeros(33, 4, '+'))  // +0033
console.log(zeros(33, 4))       // 0033