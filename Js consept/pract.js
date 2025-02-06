// reverse a string without using built in fucitons
// check if a given string is palindrome or not
// find the largest number in the given array
// remove duplicate values form an aarray
// sum of an array
// fizzbuzz game
// sum of two numbers**
// find the missing number in the given array
// flatted a nested an array
// convert first letter of each word in capital
// count the occurenct ot character in a given string
// count the length of an array without using built function
// how to check given number is palindrome or not
// how to find duplicate element in the given an array
// swap two number without using third variable
// how can you find vowels in given string
// how to find second largest element in a given string
// find the factorial of given number

let num = 5;
const factorial = (num) => {
  if (num < 0) {
    return "Factorail of negative number is not possible";
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};
console.log(factorial(num));

// const arr = [1, 2, 3, 4, 2, 4];
// const findDuplicates = (arr) => {
//   const duplicates = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
//         duplicates.push(arr[i]);
//       }
//     }
//   }
//   return duplicates;
// };
// console.log(findDuplicates(arr));
