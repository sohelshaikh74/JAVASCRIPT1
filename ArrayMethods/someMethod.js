// const numbers = [5, 12, 8, 130, 44];
const numbers = [5, 3, 1, 7, 11];
const users = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true },
];

//numbers array contain at least one even number
const evenNum = numbers.some((el) => {
  //   console.log(el);
  return el % 2 === 0;
});
// console.log(evenNum);

const allUserIsAcitve = users.every((el) => {
  //   console.log(el);
  //   return el.isActive === true;
  return el.isActive;
});
console.log(allUserIsAcitve);
