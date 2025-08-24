function sum(){
    total=0;
    for (var i=0;i<arguments.length;i++){
        total+=arguments[i];
    }
    return total;
}
console.log(sum(2,4,5,6,7,5))
var obj={
    ten: "son",
    tuoi: '22',
    daichi: 'HaTay'
}
function change(obj){
    obj.ten='samer'
}
change(obj)
console.log(obj)