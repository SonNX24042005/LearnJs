obj={
    ten:"Son",
    tuoi:22,
    diachi:"Ha Tay",
    noihoc:"Bach Khoa"
}
console.log("a"+obj.ten)
console.log('son'+JSON.stringify(obj))
for (let key in obj){
    console.log("-"+obj[key])
}