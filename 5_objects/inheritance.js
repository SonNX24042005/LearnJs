class xe{
    constructor(hang,mau,nsx){
        this.hang=hang;
        this.mau=mau;
        this.nsx=nsx;
    }
}
class xemay extends xe{
    constructor(hang,mau,nsx,cannang,tocdotoida){
        super(hang,mau,nsx);
        this.cannang=cannang;
        this.tocdotoida=tocdotoida;
    }
}
var obj=new xemay('honda','do','2023','40','200')
console.log(obj)