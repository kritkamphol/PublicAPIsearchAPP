/*ให้สร้างเว็บไซต์ Public API search โดยใช้ api ตาม document นี้ (document link)

api ที่ให้ไว้เป็น api ที่ให้ข้อมูลเกี่ยวกับ public api ในโลกนี่ ซึ่งมี feature ต่างๆ มากมาย 
อยากให้เข้าไปอ่านทำความเข้าใจใน document (document link) ก่อนเริ่มทำ challenge

Public API search web ควรมี feature ดังนี้

มีระบบการ search โดย search ตาม api title
มีระบบการ search โดย search ตาม ประเภทของ api โดย UI การ search จะเป็น Text field 
หรือ เป็น dropdown ก็ได้ (เเนะนำให้เป็น dropdown  เพื่อ ux ที่ดี)
นำ api detail ที่ดึงมาได้เเสดงผลให้สวยงาม เเละเข้าใจง่าย (สามารถใช้ css framework เพื่อช่วยเรื่องความสวยงามได้)
feature อื่นๆ สามารถเพิ่มเติมได้เต็มที่
สามารถ design รูปเเบบของเว็บนี้ได้อย่างเต็มที่ตามความคิดสร้างสรรค์

ขณะนี้ระบบของเราไม่อนุญาตให้คุณอัปโหลดไฟล์ html โปรดอัปโหลดไฟล์ zip แทน โปรดดูคำแนะนำเกี่ยวกับวิธีสร้างไฟล์ zip: ระบบ MacOs/ ระบบ Windows Normal text
*/

const formEle = document.querySelector('#searchForm');   // object ที่เก็บไว้
formEle.addEventListener("submit", function (e) {
    e.preventDefault()
    const search = formEle.entries.API
    axios.get(`https://api.publicapis.org/entries?title=${search}`)
    .then(res=>{
        console.log(res)
    })
})

     



