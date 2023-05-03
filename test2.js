let str = "каждый охотник желает знать!";

function capitalize(str) {
    return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}

console.log(capitalize(str))