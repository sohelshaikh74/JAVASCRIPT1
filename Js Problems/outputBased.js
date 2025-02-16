// ====1=========
// console.log('value of age is:',age);
// var age=20
// console.log('value of age is:',age);

// ====2=====
// myFun();
// let myFun = () => {
//   console.log("first");
// };
// myFun();
// function myFun() {
//   console.log("second");
// }
// myFun();

// ============3===========
// var variable = 10;
// (() => {
//   console.log(variable);
// })();

// console.log(variable);
// var variable = 30;

// =============4===========
// variable = 10;

// (() => {
//   foo = 100;
//   console.log(variable);
//   var foo = 100;
//   variable = 20;
//   console.log(variable);
// })();

// console.log(foo);
// console.log(variable);
// var variable = 30;

// ========5===========
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// =========6==========

// console.log(2 - "2"); //0

// =======7====
// console.log(+true); //1
// console.log(!"xyz"); //false


// 1
// function myFun(){
//     console.log(myFun.xyz) 
// }
// myFun() //undefined
// myFun.xyz=400
// myFun.xyz=200  
// myFun()  //200

// 2
// event propogation

// 3
// const numbers=[1,2,3,4]
// numbers[100]=500
// console.log(numbers)//  [1,2,3,4,<96 empty items>,500]

// 4
// console.log(typeof typeof 100)   //typeof "number" //string

// 5
// const arr=[..."john"]
// console.log(arr) //["j","o","h","n"]
//invlid syntax
// const obj={..."john"}
// console.log(obj)

// 6 
// console.log(parseInt("10+2")) 
// console.log(parseInt("7FM"))
// console.log(parseInt("M7F "))

// 7
// console.log(isNaN('john')) //true
// console.log(isNaN(10)) //false 

// 8
// console.log([1,2].map((num)=>{ 
//     if(num<0) return
//     return num*2
// })) //


// 9
// function abc(){
//     return ;
// }
// console.log(abc()) //undefined

// 10
// {
// function abc(){
//     console.log('john')
// }
// }
// abc()

// 11
function abc(a,b){
    'use strict'
    a=100
    b=200
    return args[0],args[1]   
    console.log(a+b)
}
console.log(abc(300,400))