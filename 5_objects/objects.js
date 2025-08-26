var obj={
    ten:"Nguyen Xuan Son",
    mail:"nguyenxuanson24042005a@gmail.com",
    tuoi:"18"
}

function thongtin(ten,tuoi,daichi){
    this.ten=ten;
    this.tuoi=tuoi;
    this.daichi=daichi;    
}
var obj1=new thongtin("Son","22","HaTay")
console.log(obj1)

class ThongTin{
    constructor(Ho,Ten,Tuoi,NoiO){
        this.Ho=Ho;
        this.Ten=Ten;
        this.Tuoi=Tuoi;
        this.NoiO=NoiO;
    }
}


var obj2=new ThongTin('Nguyễn Xuân','Sơn','22','HaTay')
console.log(obj2)