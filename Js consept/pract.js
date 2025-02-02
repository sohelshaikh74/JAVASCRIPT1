// const countCharOccurrences = (str, char) => {
//   let count = 0;
//   // Loop through the string to count occurrences of char
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// };

// // Example usage:
// const string = "hello world";
// const character = "l";
// console.log(countCharOccurrences(string, character)); // Output: 3

// // how to check given number is palindrome or not
let num = 121;
let numStr = String(num);
const checkPalindrome = (nS) => {
  let revNum = "";
  for (let i = nS.length - 1; i >= 0; i--) {
    revNum += nS[i];
  }
  if (revNum === numStr) {
    return true;
  } else return false;
};
console.log(checkPalindrome(numStr));
