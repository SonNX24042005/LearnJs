function sayhello(){
    console.log("Nguyen Xuan Son")
}
sayhello()  
function sum(...arr){
    total=0
    for (var i of arr){
        total+=i
    }
    return total
}
console.log(sum(24,4,2005))