let str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";

function change_register(str) {
    const newPhrase = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newPhrase.push(str[i].toLowerCase())
        } else {
            newPhrase.push(str[i].toUpperCase())
        }
    }
    return newPhrase.join('')
}

console.log(change_register(str)) // "кАжДыЙ оХоТнИк ЖеЛаЕт ЗнАтЬ"