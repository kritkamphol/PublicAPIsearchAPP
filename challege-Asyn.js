/**
 * Challenge: Async Functions
จากโจทย์เดียวกันกับเรื่อง Promises จงสร้าง Function ที่รับ Parameter ได้หนึ่งตัว คือ data และ Function นั้น 
จะต้องมีความสามารถ ดังต่อไปนี้ โดยที่จะต้องเขียน Code ในข้อนี้ให้อยู่ในรูปแบบของ Async Function
Function นั้น จะต้อง Return เป็น Promise Object เสมอ
ถ้าชนิดของ data ไม่ใช่ตัวเลข, ให้ Return Promise Rejected ทันที พร้อมกับค่า "error" เป็น String
ถ้า data เป็นเลขคี่, หลังจากเวลาผ่านไป 1 วินาที ให้ Return Promise Resolved พร้อมกับค่า "odd" เป็น String
ถ้า data เป็นเลขคู่, หลังจากเวลาผ่านไป 2 วินาที ให้ Return Promise Resolved พร้อมกับค่า "even" เป็น String
 */
Check = async(data)=>{
    if(typeof(data)!= 'number') throw 'error'
    if(typeof(data)== 'number'){
        if(data%2==0){
            return 'even'
        }else{
            return 'odd'
        }
    }
}
Check(4)
    .then((res)=>{
        console.log(res)
    })
    .catch((error)=>{
        console.log(error)
    })