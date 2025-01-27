// ==============Object==========

// how to create object
// there are two way to create object

// 1. object contructor
// const user = new Object(); //goint to create object
// user.name = "john";
// user.age = 28;
// here wer are creating a two object and setting two properties

// 2. Object literal
let user = {
  ///similar to new Object()
  name: "john",
  age: 28,

  //   we can not create a property name where are space
  //   full name :"john mark"  // this will not work

  //   if you want to use like this then you have to wrap with "" qoutes
  "full name": "jhohn mrk", //like this
};

// behind the secnen it will work as
// let user = new Object()
// user.name="john"
// user.age=28

console.log(user); //loging user object
//how to aceess property of object   ==> using dot(.) notation
console.log(user.name);

// we have [] bracket notation
console.log(user["age"]); //inside bracket we have to pass as string

// how we can access property if property has in qoutes
// v.imp
//console.log(user."full name");   // you cannot use (.) dot notation here if space in the property name. you have to use square breacket[]
console.log(user["full name"]);
