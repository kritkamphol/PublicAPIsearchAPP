//แบบที่ 1 

fetch("https://swapi.dev/api/people/1/")
.then(res=>{
    console.log("Resoleved!!!")
    res.json().json()
})
.then(data=>{
    console.log(data)
    return fetch("https://swapi.dev/api/people/2/")
})
    .then(data => {
        console.log(data)
        return fetch("https://swapi.dev/api/people/3/")
    })
.catch(err=>{
    console.log("Rejected!!,err")
})

// แบบที่ 2
async function makeRequest(){
    try{
        const res = await fetch("https://swapi.dav/api/people/1/")
        const data = await res.json()
        console.log(data)
        const res2 = await fetch("https://swapi.dav/api/people/2/")
        const data2 = await res2.json()
    }catch{
        console.log("Error!!!,e")
    }
}