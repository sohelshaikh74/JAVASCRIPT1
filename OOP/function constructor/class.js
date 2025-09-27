// there are two ways to create class in js
// 1 class declaration
class Person {
  constructor(name, birthYear, gender) {
    this.name = name;
    this.birthYear = birthYear;
    this.gender = gender;
    // this.calcAge = function () {
    //   let age = new Date().getFullYear() - this.birthYear;
    //   console.log(age);
    // };
  }
  calcAge() {
    console.log(new Date().getFullYear() - this.name);
  }
}
Person.prototype.greet = function () {
  console.log("good morning " + this.name);
};
let john = new Person("john", 1990, "male");
console.log(john);
john.calcAge();
john.greet();
