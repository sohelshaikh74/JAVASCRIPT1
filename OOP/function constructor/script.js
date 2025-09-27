// user defined function construtor v
let Person = function (name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
  //   this.calcAge = function () {
  //     let age = new Date().getFullYear() - this.birthYear;
  //     console.log(age);
  //   };
};
Person.prototype.calcAge = function () {
  let age = new Date().getFullYear() - this.birthYear;
  console.log(age);
};
let john = new Person("john", "male", 1990);
console.log(john);
john.calcAge();

let merry = new Person("merry", "female", 1995);
console.log(merry);
console.log(john.calcAge === merry.calcAge);
// merry.calcAge();

let steve = new Person("steve", "male", 1989);
console.log(steve);
// steve.calcAge();

// built in function constructor
// let now = new Date()
// let str = new String()

let mark = {
  name: "mark",
  birthYear: 1990,
  gender: "male",
};
console.log(mark);
mark.hasOwnProperty();
