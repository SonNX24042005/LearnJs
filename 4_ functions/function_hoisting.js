tong(2,4,5)
function tong(){
    let total=0
    for (let i=0;i<arguments.length;i++){
        total+=arguments[i]
    }
    console.log(total)
}