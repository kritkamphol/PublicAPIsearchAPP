const changeBackgroundPromise = (color, delay) => {
    return new Promise((resolve, reject) => {
        settiomeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}
changeBackgroundPromise('red', 1000)
    .then(() => changeBackgroundPromise('yellow', 1000))
    .then(() => changeBackgroundPromise('orange', 1000))
    .then(() => changeBackgroundPromise('green', 1000))