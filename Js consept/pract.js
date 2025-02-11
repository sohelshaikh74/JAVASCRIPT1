// caluclate the sum of the dgit in a given number
// eg 123 = 6
let num = 123;

const sumofDigit = (num) => {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  return sum;
};
console.log(sumofDigit(num));
