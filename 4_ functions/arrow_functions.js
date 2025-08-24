const func=(x=24,y=4,z=2005)=>x+y+z;
console.log(func(2,3,4))
const func1=(x=24,y=4,z=2005)=>{
    let tmp=x/y;
    return tmp+z;
}
console.log(func1())