class Table{
    constructor(dai,rong,cao){
        this.thongso=this.constructor.getSizeDefault()
    }
    static getSizeDefault(){
        return "24x4";
    }
    static getColor(){
        return "Blue";
    }
    print(){
        return `Xin chào the giới${Table.getSizeDefault()}`;
    }
    static getSizeDefault(){
        return "24x4x2005";
    }
}
console.log(Table.getSizeDefault())
console.log(new Table().print())
console.log(Table.getColor())
obj=new Table(3,4,6)
console.log(obj.thongso)