const person = {
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  },
  greet() {
    return " have a nice day";
  },
};
const john = Object.create(person);
john.greet();
const merry = Object.create(person, {
  name: { value: "merry" },
});
console.log(merry);
