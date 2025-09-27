class Person {
  constructor(name, age, birthYear) {
    this.name = name;
    this.age = age;
    this.birthYear = birthYear;
  }
  greet() {
    console.log(`good morning ${this.name}`);
  }
  static demo() {
    console.log("hey there how are you");
  }
}
const john = new Person("john", 33, 1990);
console.log(john);
john.greet();
Person.demo();
console.log(Person);

function demo() {}
console.log(typeof demo);
