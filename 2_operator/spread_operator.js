var arr=[1,2,3,4,5,6]
var arr1=[4,6,7,8,8]
var arr2=[...arr,...arr1]
console.log(arr2)
var obj={
    ten:"Son",
    tuoi:"22",
    diachi:"Ha Tay",
    truonghoc:"Bach Khoa",
    phuongtien:"Xe May"
}
var obj2={
    Ho:"Nguyen Xuan",
    ...obj
}
console.log(obj2)
function tong(...arr){
    let sum=0
    for (let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}
console.log(tong(3,4,5,6))