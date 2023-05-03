let pathname = '/home/user/dir/file.txt'

function path(pathname) {
  //1:
  //return pathname.split('/').pop()

  //2:
  //return pathname.slice(pathname.lastIndexOf('/') + 1)

  //3:
  let x = ''
  for (let i = pathname.length - 1; i >= 0; i--) {
    if (pathname[i] === '/') {
      break
    }
    x += pathname[i]
  }
  return x.split('').reverse().join('')
}

console.log(path(pathname)) // file.txt