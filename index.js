const req = new XMLHttpRequest()
req.onload = function () {
    console.log('success')
    // console.log(this) // output ที่แสดงออกมาจะอยู่ในรูปของ JASON
    const res = JSON.parse(this.responseText)
    console.log(res)
}
req.onerror = function () {{
    console.log('failed')
    console.log(this)
}}



req.open("GET", "http://swapi.dev/api/people/1/")
req.send()