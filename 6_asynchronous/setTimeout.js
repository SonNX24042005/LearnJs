let bien=setTimeout(()=>console.log("Sonw"),5000)
setTimeout(display,4)
function display(){
    console.log("NXS")
    clearTimeout(bien)
}