// merge two string by alternating characters from each string
// write a program to remove the whitespace from string
// how can you check if a given number is an armstrong number in js
// const isArmstrong = (num) => {
//   let numStr = num.toString();
//   let numDigits = numStr.length;
//   let sum = 0;
//   for (let i = 0; i < numDigits; i++) {
//     let digit = parseInt(numStr.charAt(i));
//     sum += Math.pow(digit, numDigits);
//   }
//   return sum === num;
// };
// console.log(isArmstrong(153));

let num = 123;
let reveNum = "";
const reverseNumber = () => {
  let numStr = num.toString();
  for (let i = numStr.length - 1; i >= 0; i--) {
    reveNum += numStr[i];
  }
  return reveNum;
};
console.log(reverseNumber(num));
console.log(typeof Number(reveNum));
