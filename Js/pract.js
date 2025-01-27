// let a = 0;
// let b = "height not defined";
// let height;
// // height = a == null || a == undefined ? b : a;
// // height = a ?? b;
// // console.log(height);

// height = a || b;
// console.log(height);

let user = {
  name: "john",
  age: 28,
  gender: "male",
  hobbies: null,
  contact: {
    phone: 9619497131,
    email: "john12@gmail.com",
    address: {
      street: "10th main street",
      area: "Abey wood",
      city: "London",
      country: "UK",
    },
  },
};
// console.log(user.name);
// console.log(user.birhthYear);
// console.log(user.contact.phone);
// console.log(user.contact.city);
// console.log(user.contact.city.name);
// if (user.contact.city === null || user.contact.city === undefined) {
//   console.log(undefined);
// } else {
//   console.log(user.contact.city.name);
// }

// console.log(user.contacts?.city?.name);

// let score = "22lkjfd";
let score = "john";
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
