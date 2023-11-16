//https://swapi.dev/api/people/1/

// axios.get('https://swapi.dev/api/people/1/')
// .then(res=>{
//     console.log("Success!!",res)

// })
// .catch(err=>{
//     console.log("Faied!!",err)
// })

//การใช้ axios แบบแรก
// const makeAxiosRequest = async(id)=>{
//     try{
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//         console.log("Success!!",res.data.name)

//     }catch(err){
//         console.log("Faied!!",err)
//     }
// }

////การใช้ axios แบบสอง
const getDadJoke = async()=>{
    try{
        const config = { headers : {Accept: `application/json`}}    // ที่ใช้ accept เพราะว่าใน document ของ เพจให้ใช้ 
        const res = await axios.get(`https://icanhazdadjoke.com/`,config)
        return res.data.joke
    }catch(err){
        return "No joke available"
    }
}

const renderJoke =async()=>{
    const jokeString = await getDadJoke()
    const ulEle = document.querySelector(`#joke`)
    const liEle = document.createElement(`li`)
    liEle.append(jokeString)
    ulEle.append(liEle)
}

const buttonELe = document.querySelector('button')
buttonELe.addEventListener('click', renderJoke)