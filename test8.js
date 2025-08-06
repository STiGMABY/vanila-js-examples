const delay = (callBack, ms) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(callBack())
        }, ms)
    }).then(result => console.log(result))

}

delay(() => 5 + 52, 2000)