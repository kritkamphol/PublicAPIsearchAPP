const request =(url)=>{
    return new Promise((resolve,reject)=>{
        const rand = Math.random()
        setTimeout(()=>{
            if (rand > 0.7) { 
                resolve('Request Success!!!') 
            }else{
                    reject('Request Failed!!!')
                }
            
        },1000)
    })
}


request()
.then((data)=>{
    console.log('Your Data is ',data)
})
.catch((error)=>{
    console.log('Error:',error)
})