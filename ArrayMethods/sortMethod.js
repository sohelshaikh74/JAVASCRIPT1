const words = ["date", "banana", "apple", "elderberry", "cherry"];
// const sortedWords = words.sort();
const sortedWords = words.sort().reverse();
// console.log(sortedWords);
// console.log(words);

const numbers = [7, 2, 10, 4, 8, 3, 1];
const sortedNumbers = numbers.sort((a, b) => {
  return a - b;
});
// console.log(sortedNumbers);
// [2,7]

const arr1 = [5, 1, 9, 3, 7];
const sortedArr = arr1.sort((a, b) => {
  return a - b;
});

`
1) 5 > 1 -> swap [1,5,9,3,7]
2) 5 < 9 -> no swap [1,5,9,3,7]
3) 9 > 3 -> swap [1,5,3,9,7]
4) 9 > 7 -> swap [1,5,3,7,9]
5) go back: 5 > 3 -> swap [1,3,5,7,9]
final sorted array is [1,3,5,7,9]
`;
// console.log(sortedArr);

const arr2 = [10, 4, 6, 2, 8];
const sortedNum = arr2.sort((a, b) => {
  return a - b;
});

`
1) 10 > 4 -> swap [4,10,6,2,8]
2) 10 > 6 -> swap [4,6,10,2,8]
3) 10 > 2 -> swap [4,6,2,10,8]
4) 10 > 8 -> swap [4,6,2,8,10]
5) Go Back: 6 > 2 -> swap [4,2,6,8,10]
6) 4 > 2 -> swap [2,4,6,8,10]
final sortedNum = [2,4,6,8,10]
`;
//
// console.log(sortedNum);

const arr3 = [15, 11, 9, 20, 3];
const sortedNum3 = arr3.sort((a, b) => {
  return a - b;
});
`
1) 15 > 11 -> swap [11,15,9,20,3]
2) 15 > 9 -> swap [11,9,15,20,3]
3) 15 < 20 -> no swap [11,9,15,20,3]
4) 20 > 3 ->  swap [11,9,15,3,20]
5) Go Back: 15 > 3 ->  swap [11,9,3,15,20]
6) Go Back: 9 > 3 ->  swap [11,3,9,15,20]
7) Go Back: 11 > 3 ->  swap [3,11,9,15,20]
7) Go Back: 11 > 9 ->  swap [3,9,11,15,20]
final output [3,9,11,15,20]
`;
// console.log(sortedNum3);

const arr4 = [4, 2, 9, 2, 7, 4];
const sortedNum4 = arr4.sort((a, b) => {
  return a - b;
});
`
1) 4 > 2 -> swap [2,4,9,2,7,4]
2) 4 < 9 -> no swap [2,4,9,2,7,4]
3) 9 > 2 -> swap [2,4,2,9,7,4]
4) 9 > 7 -> swap [2,4,2,7,9,4]
5) 9 > 4 -> swap [2,4,2,7,4,9]
6)Go Back: 7 > 4 -> swap [2,4,2,4,7,9]
7) 4 > 2 -> swap [2,2,4,4,7,9]
final output [2,2,4,4,7,9]
`;
// console.log(sortedNum4);

const test = [10, 2, 30];
const sortedTest = test.sort((a, b) => {
  return a - b;
});
// console.log(test);
// console.log(sortedTest);

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];
const tested = users.sort((a, b) => {
  return a.age - b.age;
});
console.log(tested);

let sortedUsers = users.sort((curr, next) => {
  if (curr.age < next.age) return -1;
  if (curr.age > next.age) return 1;
  return 0;
});
console.log(sortedUsers);
