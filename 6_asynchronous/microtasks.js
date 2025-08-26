console.log("a");
setTimeout(()=>{console.log("b")},0)
const bien=new Promise((res,rej)=>{
    res("Dung")
})
bien
.then(mes=>{
    console.log(mes)
})
console.log("c")