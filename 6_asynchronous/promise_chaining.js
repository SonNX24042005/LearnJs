let promse1=new Promise((res,rej)=>{
    res(2)
})
promse1
.then(mes=>{
    console.log(mes)
    return mes*2
})
.then(mes=>{
    console.log(mes)
    return mes*2
})
.then(mes=>{
    console.log(mes)
    return mes*2
}).then(mes=>{
    console.log(mes)
    return mes*2
}).then(mes=>{
    console.log(mes)
    return mes*2
})
promse1
.then(mes=>{
    console.log(mes)
    return mes*2
})
promse1
.then(mes=>{
    console.log(mes)
    return mes*2
})
promse1
.then(mes=>{
    console.log(mes)
    return mes*2
})
.catch(err=>console.log(err))