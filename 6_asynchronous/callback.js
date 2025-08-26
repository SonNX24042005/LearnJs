function sum(...args){
    total=0
    for (let i of args){
        total+=i
    }
    return total
}
function display(callback){
    console.log("Tong la")
    console.log(callback(24,4,2005))
}
display(sum)

console.log("Hello world")
setTimeout(display,244);
function display(){
    console.log("Middle")
}
console.log("End")