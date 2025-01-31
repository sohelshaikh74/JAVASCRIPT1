function flattenArray(arr) {
  let result = [];

  // Iterate over each element in the array
  for (let i = 0; i < arr.length; i++) {
    // If the element is an array, recursively flatten it
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      // Otherwise, add the element to the result array
      result.push(arr[i]);
    }
  }

  return result;
}

// Example usage:
const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
console.log(flattenArray(nestedArray));
// Output: [1, 2, 3, 4, 5, 6, 7]
