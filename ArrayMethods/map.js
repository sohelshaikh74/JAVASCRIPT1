const numbers = [1, 4, 9];
const names = ["john", "sarah", "steve"];
const products = [
  { id: 1, name: "Shirt", price: 20, discount: 10 },
  { id: 1, name: "Hat", price: 15, discount: 15 },
  { id: 1, name: "T-shirt", price: 35, discount: 10 },
];

// let transformedArray = numbers.map(function (ele, index, array) {
//   let square = ele * ele;
//   return square;
// });
// console.log(transformedArray);
// console.log(numbers);

// let upperNames = names.map((el, index, arr) => {
//   return el.toUpperCase();
// });
// console.log(upperNames);

let productDetails = products.map((prod) => {
  return {
    id: prod.id,
    name: prod.name,
    price: prod.price,
    discountedPrice: prod.price - (prod.price * prod.discount) / 100,
  };
});
console.log(productDetails);
