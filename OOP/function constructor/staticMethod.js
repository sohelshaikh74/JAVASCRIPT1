class Person {
  constructor(name, birthYear, gender) {
    this.name = name;
    this.birthYear = birthYear;
    this.gender = gender;
  }
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
  static greet() {
    console.log("Hey how are you!");
  }
}
let john = new Person("john", 1990, "male");
//
console.log(john);
Person.greet();
console.log(Person);
