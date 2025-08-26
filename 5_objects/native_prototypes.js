String.prototype.test= ()=>{
    return this+"son"
};
let str="Son";
console.log(str.test())

function Person(id, name) {
  this.id = id;
  this.name = name;
}
Person.prototype.display = function() {
  console.log(this.id + ", " + this.name);
};
