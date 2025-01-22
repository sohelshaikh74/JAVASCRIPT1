// check given string palindrom or not
const checkPalindrom = (str) => {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  if (revStr === str) {
    return true;
  } else return false;
};
let str = "falk";
console.log(checkPalindrom(str));
