async function login(username,password){
    if(!username || !password)throw 'Missing Crudentials'
    if(password == 'hello') return 'Welcome'
    throw 'Invalid Password'
}

login('test','hello1')
.then((data)=>{
    console.log('Success!!',data)})
.catch((data)=>{
    console.log('Failed!!',data)
})

// เขียนในรูป ARROW FUNCTION
// const test = async()=>{

// }