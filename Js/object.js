// ==============Object==========
// answer: obejct is collectio of key value  pairs. key can be any identifier it likes variable name and that key we can assign a value of any type

// ************how to create object***
// there are two way to create object

// 1. object contructor
// const user = new Object(); //goint to create object
// user.name = "john";
// user.age = 28;
// here wer are creating a two object and setting two properties

// 2. Object literal
// let user = {
///similar to new Object()
//   name: "john",
//   age: 28,

//   we can not create a property name where are space
//   full name :"john mark"  // this will not work

//   if you want to use like this then you have to wrap with "" qoutes
//   "full name": "jhohn mrk", //like this
// };

// behind the secnen it will work as
// let user = new Object()
// user.name="john"
// user.age=28

// console.log(user); //loging user object
//*********how to aceess property of object   ==> using dot(.) notation and bracket notation []***
// console.log(user.name);

// we have [] bracket notation
// console.log(user["age"]); //inside bracket we have to pass as string

// *******how we can access property if property has in qoutes**********
// v.imp
//console.log(user."full name");   // you cannot use (.) dot notation here if space in the property name. you have to use square breacket[]
// console.log(user["full name"]);

// ***********how to add new property on the object******
// user.gender = "male";
// console.log(user);

// ******* if property already exist*********
// user.age = 30; //this age propery does not create new property it will udpate(modify) previous one
// console.log(user);
// console.log(user.age);

// *********** modify exist property using [] notation
// user["age"] = 32;
// console.log(user);

// ********** how we delete a property ********
// i want to delete full name property
// delete user["full name"]; //delete porperty used to delete property from an object it is work only object not work with array

// delete user.age;
// console.log(user);

// (note : if property contain white space then we have to user square bracket notation[])

// ========================Object( methods and properties)========

// let user = {
//     name: "john",
//     yearofBirth: 1989,
//     isMarried: true,
//   };
// ****** what is method in object and how to create and use a method
//(note: we learned function is also value so a key can also assign a function and when we assign a function to key that key called as method)
let user = {
  name: "john",
  yearofBirth: 1989,
  isMarried: true,
  //   calculateAge: function (yearofBirth) {
  //     return 2025 - yearofBirth;   //we have already yearofbirth property we have to use this property not parameter value
  //   },
  //   calculateAge: function () {
  //     return 2025 - user.yearofBirth; // this property is user object so that why we have to user user.yearofBirth
  //   },

  calculateAge: function () {
    return 2025 - this.yearofBirth; // this property is user object so that why we have to user user.yearofBirth
  },
};
let age = user.calculateAge(2001);
console.log(age);
