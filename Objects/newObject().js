// // let user = new Object();
// // user.name = "john";
// // user.age = 28;

// let user = {
//   name: "john",
//   age: 28,
//   "full Name": "john doe",
//   gender: "female",
// };
// user.gender = "male";
// console.log(user);
// // console.log(user.name);
// // console.log(user["age"]);
// // console.log(user["full name"]);

// delete user["full Name"];
// console.log(user);
let user = {
  name: "john",
  birthYear: 1989,
  isMarried: true,
  calculateAge: function (yearOfBirth) {
    return new Date().getFullYear() - user.birthYear;
  },
};
console.log(user.calculateAge());
