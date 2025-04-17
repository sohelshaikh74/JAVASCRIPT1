// count the occurence in the string
let str = "hello";
let letter = "l";
let count = 0;
for (let i = str.length - 1; i >= 0; i--) {
  if (str[i] === letter) {
    count++;
  }
}
console.log(count);
