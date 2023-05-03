let str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";

function remove_char(str) {
    return str.replace(/[^a-z0-9]/gmi, ' ').replace(/\s+/g, " ")
}

console.log(remove_char(str))

// [^a-z0-9] - to remove non alphanumeric characters
// \s+ - match any collections of spaces
// \r?\n|\r - match all new line
// /gmi - global, multi-line, case insensitive