












// const getDadJoke = async () => {
//     try {
//         const config = { headers: { Accept: 'application/json' } }
//         const res = await axios.get(`https://icanhazdadjoke.com/`, config)
//         console.log(res.data.joke)
//     } catch (err) {
//         return "No joke avaliable"
//     }
// }
// const renderJoke =async()=>{
//     const jokeString = await getDadJoke()
//     const ulEle = document.querySelector(`#joke`)
//     const liEle = document.createElement('li')
//     ulEle.append(jokeString)
//     liEle.append(liEle)
// }
// const buttonEle = document.querySelector('button')
// buttonEle.addEventListener('Click',renderJoke)






// ใช้ในการดึง api ของ dadjoke มา
const getDadJoke = async()=>{
    try{const config = { header : {Accept : application/json}}
    const res = await axios.get(`https://icanhazdadjoke.com/`,config)
    .then(res.data.joke)
}catch(err){
    return "No Joke avaliable"
}
}
const renderJoke = async()=>{
    const stringJoke = await getDadJoke()
    const ulEle=document.querySelector('#joke')
    const liEle = document.querySelector('li')
    ulEle.append(stringJoke)
    liEle.append(liEle)
}

const buttonEle = document.getElementById('button')
buttonEle.addEventListener('Click',getDadJoke)






















