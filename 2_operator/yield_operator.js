function* test(){
    var v1=yield 20
    console.log(v1)
    yield [1,2,4]
    yield "hello world"
}
let res=test()
console.log(res.next())
console.log(res.next(24))
console.log(res.next())
console.log(res.next())