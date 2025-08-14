var arr=[23,34,5,6,6,5324]
for (var item of arr){
    console.log(item)
}
var ten='NguyenXuanSon'
for (var c of ten){
    console.log(c)
}
var nums=new Set(arr)
for (var i of nums){
    console.log(i)
}

var new_map=new Map();
new_map.set('one',1)
new_map.set('two',2)
new_map.set('three',3)
new_map.set('four',4)
for (var [k,v] of new_map){
    console.log(k,v)
}