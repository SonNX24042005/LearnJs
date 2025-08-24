var sum=function (...arr){
    total=0
    for (var i of arr){
        total+=i;
    }
    return total;
}
console.log(sum(24,4,2005))
console.log(sum(4,11,2005))
var print_outer=function(){
    var print_inner=function (){
        console.log("Hello")
    }
    return print_inner()
}
print_outer()