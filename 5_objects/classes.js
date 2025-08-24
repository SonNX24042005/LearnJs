class Car{
    constructor(mau,gia,hang,cannang){
        this.mau=mau;
        this.gia=gia;
        this.hang=hang;
        this.cannang=cannang;
    }
    move(dich){
        console.log(`Xe ${this.hang}, ${this.mau},${this.gia} đang đi đến ${dich}`)
    }
}
var obj=new Car('Xanh','1ty','bmw','1tan')
// console.log(obj)
obj.move('HaTay')