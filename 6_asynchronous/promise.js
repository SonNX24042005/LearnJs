var num=1
console.log("a")
promise1=new Promise((resolve,reject)=>{
    if (num%2==0){
        resolve(`Do la so chan`)
    }else{
        reject(`Do la so le`)
    }
})
console.log("C")
promise1
.then(message=>{console.log(`Ket qua la so chan${message}`)})
.catch(err=>{console.log(`Ket qua la so le${err}`)})
.finally(()=>{console.log(`Hoan thanh`)})
console.log("b")