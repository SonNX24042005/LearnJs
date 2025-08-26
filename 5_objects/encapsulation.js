class Table{
    #ten="Son";
    #tuoi="22";
    get getTen(){
        return this.#ten
    }
    get getTuoi(){
        return this.#tuoi
    }
    set setTen(name){
        this.#ten=name
    }
    set setTuoi(age){
        this.#tuoi=age
    }
}
var obj=new Table()
obj.setTen="Samer"
obj.setTuoi="35"
console.log(obj.getTen,obj.getTuoi)
