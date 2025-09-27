// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce(function (acc, el, index, arr) {
//   return acc + el;
// }, 0);
// console.log(result);

let numbers = [1, 40, 20, 33, 2];
let max = numbers.reduce((acc, el) => {
  return Math.max(acc, el);
});
console.log(max);
