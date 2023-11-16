const formEle = document.querySelector('#searchForm')   // object ที่เก็บไว้
formEle.addEventListener('submit',function(e){
    e.preventDefault()
    const search = formEle.elements.query.value
    axios.get(`https://api.tvmaze.com/search/shows?q=${search}`)
    .then(res=>{
        renderImg(res.data)
    })
})
const getMovieDetails = async(search)=>{
    try{
        const config = { params: { q: search}}
        const res = await axios.get('https://api.tvmaze.com/search/shows',config)
        renderImg(res.data)

    }catch(err){
        console.log(err)
    }
}
const renderImg = (data)=>{
    for(let item of data){
        if(item.show.image?.medium){
            imgEle.src = item.show.image.medium
            document.body.append(imgEle)
        }
    }
}


