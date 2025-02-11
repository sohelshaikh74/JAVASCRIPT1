// const users = [
//   { name: "john", age: 25 },
//   { name: "mark", age: 24 },
//   { name: "merry", age: 22 },
//   { name: "steve", age: 21 },
// ];
// console.log(users.map((user) => ({ ...user, age: user.age + 5 })));
// let arr = [1, 2, 3];
// if (arr[5] === undefined) {
//   console.log(arr[5]);
// } else {
//   console.log("element does not exists");
// }

// ===2=
// console.log(null==undefined);
// console.log(null===undefined);

// ==3===
// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6, 7, 8, 9],
//   [10, 11, 12],
// ];

// const arr2 = arr.flat(1, 2);
// console.log(arr);
// console.log(arr2);

// function flatten(arr) {
//   const result = [];

//   for (const element of arr) {
//     if (Array.isArray(element)) {
//       result.push(...flatten(element));
//     } else {
//       result.push(element);
//     }
//   }

//   return result;
// }

// const arr = [1, [2, 3], [4, 5, 6, [7, 8]]];

// const flattenedArr = flatten(arr);

// console.log(flattenedArr);

// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// a();
// function a() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// a();

// ========OBJECTS============
// let person = {
//   name: "john",
//   age: 25,

//   // 1.  i want to add one more propery here like below you can also add using "" these
//   "like this content": true, //now this treat like key
// };
// // person.name = "mark";
// // delete person.name;
// // console.log(person.name);

// // done how to modify,access and delete perticular property
// // const func = (function (a) {
// //   delete a;
// //   return a;
// // })(5);
// // console.log(func);

// // how we can access
// console.log(person["like this content"]);

// // if you want to delete this key you can do
// console.log(person);
// delete person["like this content"];
// console.log(person);

// 2.
// question :how do you add dynamic key value pairs to an object (you can use compute propery)

// // let say  we have two variable here
// const key = "firstName";
// const value = "john";
// const person = {
//   key: value, //firstName:"john"
//   //but the key must be firstName you can not use like above it is okay manually
//   [key]: value, //(compute property )
// };
// console.log(person.key);
// console.log(person.firstName); //now you can use proper key name

// 3.
// question:we want to loop through each of its keys and print the values or even the name of keys how can you do this?
// const user = {
//   name: "john",
//   age: 25,
//   isTotallyOsm: true,
// };
// for (let key in user) {
//   //you cannot use for of here
//   console.log(key); //it will print all the keys
//   console.log(user[key]); // it will print all the values
// }

// 4.

// ============
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
