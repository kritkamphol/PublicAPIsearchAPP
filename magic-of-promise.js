const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout:(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}
fakeRequestPromise('book.com/page1')
.then((data)=>{
    console.log('Success!!!(page1')
    console.log(data)
    return fakeRequestPromise('book.com/page2')
})
    .then((data) => {
        console.log('Success!!!(page2')
        console.log(data)
        return fakeRequestPromise('book.com/page3')
    })
    .then((data) => {
        console.log('Success!!!(page3')
        console.log(data)
        
    })
.catch((error)=>{
    console.log('Failed')
    console.log(error)
})