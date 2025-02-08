// to avoid a referecen what we can do
// some() and every() method in js
// write a js program to check maximum number in the given array
// merge into a single array don't use built in fuction
// check given number is armstrong or not
// find the smallest word in the given sentence
// program to find largest word in the given sentence
// how to find fibonacci sequens in the js
// count the number of digit in  a number
// how to convert number to array
// how to swap tow number without using third varialbe
// how to find vowels in the given array
// how to find factorial of given number
const factorail = (n) => {
  let result = 1;
  if (n < 0) {
    return "factorail of negative number is not possible";
  }
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
};
console.log(factorail(5));

// let str1 = "hello";
// let str2 = "world";
// let merged = "";
// const mergeTowString = (str1, str2) => {
//   let maxLength = Math.max(str1.length, str2.length);
//   for (let i = 0; i < maxLength; i++) {
//     if (i > str1[i]) {
//       merged += str1[i];
//     }
//     if (i > str2[i]) {
//       merged += str1[i];
//     }
//   }
//   return merged;
// };
// console.log(mergeTowString(str1, str2));
