// palindrome a given number
let num = 121;
num = num.toString();
const palindrome = (num) => {
  let reversed = "";
  for (let i = num.length - 1; i >= 0; i--) {
    reversed += num[i];
  }
  if (reversed === num) {
    return true;
  } else return false;
};
console.log(palindrome(num));
