let str = '    \`Max is a good      boy     \`'

function strip(str) {
  return str
    .replace(/\s+/g, ' ')
    .replace(/\s+$/g,'')
}

console.log(strip(str)) // 'Max is a good boy'