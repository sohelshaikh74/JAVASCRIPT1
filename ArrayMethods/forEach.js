let numbers = [7, 12, 10, 4, 8, 3];
let squared = [];
numbers.forEach((ele, index, arr) => {
  let sqr = ele * ele;
  squared.push(sqr);
});
console.log(squared);

let evenNumbers = [];
let reuslt = numbers.forEach((el) => {
  return el % 2 === 0;
});
console.log(reuslt);
