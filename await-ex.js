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
/////////code นี้ยังไม่ได้มีการแก้ปัญหากรณีมี error จะหยุดการทำงาน
// const requestAsync=async()=>{
//     const res= await fakeRequestPromise('book.com/page1')
//     console.log(res)
//     const res2=await fakeRequestPromise('books.com/page2')
//     console.log(res2)
//     return 'success!!!'
// }

//วิธีการแก้ปัญหา error
const requestAsync = async()=>{
    try {
        const res = await fakeRequestPromise('book.com/page1')
        console.log(res)
        const res2 = await fakeRequestPromise('books.com/page2')
        console.log(res2)
    } catch (e) {
        console.log('Failed!!!')
        console.log('Error is:', e)
    }

}




// requestAsync()             //สามารถใช้ตัว then ทำต่อได้เลยเพราะว่าเป็น promise
// .then((data)=>{
//     console.log('Books')
//     console.log(data)
// })






fakeRequestPromise('books.com')
    .then((data)=>{
        console.log("success!!!")
        console.log(data)
    })
    .catch((error)=>{
        console.log('Failed!!!')
        console.log(error)
    })




// const changeBackgroundPromise=(color,delay)=>{
//     return new Promise((resolve,reject)=>{
//         settiomeout(()=>{
//             document.body.style.backgroundColor=color
//             resolve(`Here is your fake data from ${url}`)
//         },delay)
//     })
// }
// // changeBackgroundPromise('red',1000)
// //     .then(()=>changeBackgroundPromise('yellow',1000))
// //     .then(()=>changeBackgroundPromise('orange',1000))
// //     .then(()=>changeBackgroundPromise('green',1000))

// const rainbow = async()=>{
//     await changeBackgroundPromise('red',1000)
//     await changeBackgroundPromise('orange',1000)
//     changeBackgroundPromise('green', 1000)
//}