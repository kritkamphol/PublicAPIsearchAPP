
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
//แบบที่ 1
const res = fakeRequestPromise('book.com/page1')
res.then(() => {
    console.log('Success!!!(page1)')
    fakeRequestPromise('book.com/page2')
        .then(() => {
            console.log('Success!!!(page2)')
        })
    fakeRequestPromise('book.com/page3')
        .then(() => {
            console.log('Success!!!(page3)')
        })
        .catch(() => {
            console.log(`Failed!!!(page3)`)
        })
        .catch(() => {
            console.log(`Failed!!!(page2)`)
        })
}).catch(() => {
    console.log('Failed!!!(page1)')
})
//แบบที่ 2
// fakeRequestPromise('book.com')
//     .then(() => {
//         console.log('Success!!!')
//     })
//     .catch(() => {
//         console.log('Error!!!')
//     })