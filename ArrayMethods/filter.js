const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const words = ["apple", "banana", "cherry", "date", "elderberry"];
const products = [
  { id: 1, name: "Shirt", price: 20, discount: 10 },
  { id: 2, name: "Hat", price: 15, discount: 15 },
  { id: 3, name: "T-shirt", price: 35, discount: 10 },
];

// let evenNumbers = numbers
//   .filter(function (el) {
//     return el % 2 === 0;
//   })
//   .filter((el) => el % 3 === 0);
// console.log(evenNumbers);

// let result = words.filter((el) => {
//   return el.length > 5;
// });
// console.log(result);

const result = products.filter((el) => {
  return el.price <= 20;
});
console.log(result);
