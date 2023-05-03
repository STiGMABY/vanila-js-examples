let str = 'Сила тяжести приложена к центру масс тела'

function cutString(str, n) {
  return str.split(' ').splice(0, n).join(' ')
}

console.log(cutString(str, 4)) // 'Сила тяжести приложена к'