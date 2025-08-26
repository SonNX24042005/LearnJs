function info(ho,ten,tuoi,diachi,noihoc){
    this.ho=ho;
    this.ten=ten;
    this.tuoi=tuoi;
    this.diachi=diachi;
    this.noihoc=noihoc;
    this.print=()=>{
        console.log(this.ho,this.ten,this.tuoi,this.diachi,this.noihoc)
    }
}
const obj=new info("Nguyen","Son","22","HaTay","HUST")
console.log(obj.print())