// remove the duplicate from an array
const arr = [1, 2, 3, 2];
let result = [];
const uniqueArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(uniqueArray(arr));
