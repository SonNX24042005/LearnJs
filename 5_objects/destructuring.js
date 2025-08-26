var obj={
    ten:"Son",
    tuoi:"22",
    noihoc:"HUST",
    noio:{
        xa:'TY',
        tt:'HT'
    }
}
let {ten='Samer',sdt='89234587',noihoc='HT',noio:{xa='TY',tt='HT'}}=obj
console.log(ten,sdt,noihoc,xa,tt)

let {ten:NAME,...other}=obj
console.log(other)

let {ten:Name,tuoi:age,noihoc:school}=obj
console.log(Name,age,school)

var a=[3,4,5,6,7,[8,9,10]]
var [a,,c,d,e,[f,g,h]]=a
console.log(a,c,d,e,f,g,h)
console.log(obj?.noi?.xa)