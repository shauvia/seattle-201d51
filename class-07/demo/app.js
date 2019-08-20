'use strict';

// With a global array ...
// var listOfPeople = [];

function Person(first, last, hair, age) {
  this.fullName = [first, last];
  this.hasHair = hair;
  this.age = age;
  this.walking = false;

  // With a global?
  // listOfPeople.push(this);

  // With a Constructor Function Propery
  Person.listOfPeople.push(this);
}

// Constructor function property can be an array!
Person.listOfPeople = [];

Person.prototype.walk = function () {
  this.walking = true;
};
Person.prototype.getYearsFromDeath = function () {
  return 100 - this.age;
};

var john = new Person('John', 'Cokos', false, 51);
var cat = new Person('Cat', 'Cokos', true, 30);
var zach = new Person('Zach', 'Cokos', true, 20);

// Loop over the things in either the Constructor
// function "listOfPeople" array or the global if
// you choose
for (var i = 0; i < Person.listOfPeople.length; i++) {
  console.log(Person.listOfPeople[i]);
}