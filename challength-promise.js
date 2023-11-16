
///ทำได้แล้ว

const check = ((data) => {
    return new Promise((resolve, reject) => {
        if (typeof (data) == 'string') {
            reject('error the data is string')
        } else {
            if (data % 2 !== 0) {
                setTimeout((data) => {
                    resolve('Odd')
                }, 1000);
            } else {
                setTimeout((data) => {
                    resolve('Even')
                }, 2000);
            }
        }
    })
})
check('kwan')
.then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})