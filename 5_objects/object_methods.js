const obj={
    ten:"Son",
    tuoi:"22",
    print(){
        console.log(`Xin chao ${this.ten} ${this.tuoi}`)
    },
    print2: function(){
        console.log("Xin chào cuộc đời")
    }
}
obj.print2()
obj.print2= (a,b)=>{console.log(a+b)}
obj.print2(2,4)