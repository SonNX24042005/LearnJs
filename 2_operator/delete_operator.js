var obj={
    ten:"Son",
    tuoi:"22",
    diachi:"Ha Tay",
    truonghoc:"Bach Khoa",
    phuongtien:"Xe May"
}
console.log(obj)
delete obj.ten
delete obj['tuoi']
console.log(obj)
var arr=[2,4,5,6,6,6,7,7,8]
delete arr[1]
var x=24
console.log(delete x)
var fun = function(){return 10}
console.log(delete fun)