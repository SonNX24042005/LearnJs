class A{
    print1(){
        console.log("A")
    }
}
class B extends A{
    print1(){
        console.log("B")
        super.print1();

    }
}
var obj=new B();
obj.print1();