const numbers = [5, 12, 8, 130, 44];
//return first element which is greater than 10

const result = numbers.find((el) => {
  // console.log(el);
  return el > 10;
});
// console.log(result);

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charile" },
];

//we want to find a user whose id is equal to two
const user = users.filter((el) => {
  return el.id === 2;
});
console.log(user);
//we want to find first  user whose id is equal to two
const user2 = users.find((el) => {
  return el.id === 2;
});
console.log(user2);
