// 1:
let str = "каждый охотник желает знать";

function capitalize(str) {

    const splited = str.split(' ')
    const capitalizedPhrase = []
    for (let i = 0; i < splited.length; i++) {
        let splitedStr = splited[i]
        splitedStr = `${splitedStr.charAt(0).toUpperCase()}${splitedStr.slice(1)}`
        capitalizedPhrase.push(splitedStr)
    }
    return capitalizedPhrase.join(' ') //Каждый Охотник Желает Знать
}

console.log(capitalize(str))

// 2:
// В этом примере регулярное выражение работает следующим образом:
// Взять все символы без пробелов (\ S),
// стоящие в начале строки (^) или после любого символа пробела (\ s)
// и преобразовать их в верхний регистр (toUpperCase).
let str2 = "каждый охотник желает знать!!"

function capitalize2(str) {
    return str.replace(/(^|\s)\S/g, (a) => a.toUpperCase())
}

console.log(capitalize2(str2))