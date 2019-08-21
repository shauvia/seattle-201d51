localStorage.setItem('name','John');

localStorage.setItem('pets',['Rosie','Rocky']);
console.log(localStorage.pets);
console.log(localStorage.getItem('pets'));

var person = {name:'John',age:50};
localStorage.setItem('person',person);
console.log(localStorage.getItem('person'));

var personAsString = JSON.stringify(person);
console.log(personAsString);
var personAsObject = JSON.stringify(personAsString);
console.log(personAsObject);

localStorage.setItem('person',personAsString);
var p = localStorage.getItem('person');
console.log(p.name)
p = JSON.parse(p);
console.log(p.name);

