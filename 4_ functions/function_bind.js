function greet(message) {
    return( message + ', ' + this.name);
}
// Object with a 'name' property
const person = { name: 'John Doe' };    
const greetPerson = greet.bind(person, 'Hello');
console.log(greetPerson())