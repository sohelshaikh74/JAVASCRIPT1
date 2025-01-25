// function x() {
//   // var i = 1;
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 3000);
//   }
//   console.log("js");
// }
// x();

// function outer() {
//   var a = 1;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// // let innerFunction = outer();
// // innerFunction();
// outer()(); // it will execute same like above

// function outest() {
//   let c = 20;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     let a = 10;
//     return inner;
//   }
//   return outer;
// }
// // let innerFunction = outer();
// // innerFunction();
// outest()("Hello")(); // it will execute same like above

// function outest() {
//   let c = 20;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     let a = 10;
//     return inner;
//   }
//   return outer;
// }
// let a = 100;
// // let innerFunction = outer();
// // innerFunction();
// outest()("Hello")(); // it will execute same like above

var obj = {
  name: "john",
  display: () => {
    console.log(this.name);
  },
};
// obj.display();
var obj1 = {
  name: "mark",
};

obj.display.call(obj1);


