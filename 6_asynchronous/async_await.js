async function lamgido(){
    console.log("c")
    var num=245
    const  data = new Promise((res,rej)=>{
        if (num%2==0){
            res("Do la so chan")
        }else{
            rej("Do la so le")
        }
    })
    console.log("e")
    try {
        const data1= await data;
        console.log(data1)
    } catch (error) {
        console.log("Loi do la "+error)
    }
    console.log("d")
    return "xong"

}
console.log("a")
lamgido().then(mes=>console.log("Hii"+mes)).catch(err=>console.log("hello"+err))
console.log("b")
console.log("f")