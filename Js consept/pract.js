// count the occurence in the string
let str = "hello";
let letter = "l";
let count = 0;
for (let i = 0; i <= str.length - 1; i++) {
  if (str[i] === letter) {
    count++;
  }
}
console.log(count);
