// the 'this' variable
// console.log(this);
// function greet() {
//   console.log("hey there");
//   console.log(this);
// }
// greet();
// "use strict";
// console.log(this);
// function greet() {
//   console.log("hey there");
//   console.log(this);
// }
// greet();

// let john = {
//   year: 1990,
//   calcAge() {
//     console.log(2025 - this.year);
//     console.log(this);
//     let x = () => {
//       console.log(this);
//     };
//     x();

//     // function inner() {
//     //   console.log(this);
//     // }
//     // inner();
//   },
// };
// john.calcAge();

// let mark = {
//   year: 1985,
// };
// mark.calcAge = john.calcAge;
// mark.calcAge();

// =================== The this keyword and Functions====================
// let john = {
//   year: 1990,
//   firstName: "john",
//   calcAge() {
//     console.log(2021 - this.year);
//     console.log(this);

// solution-1
// let self = this;
// function greet() {
//   console.log(`${self.firstName} was born in ${self.year}`);
// }
// greet();

// solution-2 using arrow function
//     let greet = () => {
//       console.log(`${this.firstName} was born in ${this.year}`);
//     };
//     greet();
//   },
//   greet: () => {
// console.log("hii " + this.firstName);
// console.log(this);
//   },
// };
// john.calcAge();
// john.greet();

// =============== regular function and arrow funciton ================
// function sum(x, y) {
//   console.log(x + y);
//   console.log(arguments);
// }
// sum(1, 2, 3, 4);

// let sum = (x, y) => {
//   console.log(x + y);
//   console.log(arguments);
// };
// sum(1, 2, 3, 4);

// ===================some example=================
// let person = {
//   fName: "John",
//   lName: "Doe",
//   fullName: function () {
//     return this.fName + " " + this.lName;
//   },
// };

// let anotherPerosn = {
//   fName: "Jane",
//   lName: "Smith",
// };

// console.log(person.fullName());
// console.log(person.fullName.call(anotherPerosn));

// // 2
// const person = {
//   fName: "Alice",
//   lName: "Jhonson",
//   fullName: function () {
//     return `${this.fName} ${this.lName} `;
//   },
// };
// const getFullName = person.fullName;
// console.log(person.fullName()); //Alice Jhonson
// console.log(getFullName()); // undefined undefind

// 3
// const person = {
//   fName: "John",
//   lName: "Doe",
//   fullName: () => {
//     return this.fName + " " + this.lName;
//   },
// };
// console.log(person.fullName()); // undefined undefined
