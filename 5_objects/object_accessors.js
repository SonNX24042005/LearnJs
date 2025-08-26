obj={
    ten:"Son",
    Ho:"Nguyen",
    tuoi:"22",
    get getTen(){
        return this.ten;
    },
    set setTuoi(age){
        this.tuoi=age;
    }
}
console.log(obj)
console.log(obj.getTen)
obj.setTuoi=23
console.log(obj)