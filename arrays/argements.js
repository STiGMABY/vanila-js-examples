function myArgs() {
    let args = []
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        args[i] = arguments[i]
    }
    console.log(args.concat(['123'])) //после преобразования псевдомассива argements можем сконкотенировать 
}
myArgs('a', 'b', 'c', 'd', 'e', 'f')