// ===================1) reverse a string without using built functions======================
// let str = "hello";
// let revStr = "";
// const reverseStr = (str) => {
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   return revStr;
// };
// const result = reverseStr(str);
// console.log(result);

// ***********using built in function************
// let str = "hello";
// let result = str.split("").reverse().join("");
// console.log(result);

// ======================2) Check if a String is a Palindrome =====================
// Check if a given string is a palindrome (reads the same forward and backward)
// function isPalindrome(str) {
//   let reversedStr = ""; // Variable to store the reversed string

//   // Loop through the string in reverse order
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i]; // Append each character to reversedStr
//   }

//   // Compare the original string with the reversed string
//   if (str === reversedStr) {
//     return true; // It's a palindrome
//   } else {
//     return false; // It's not a palindrome
//   }
// }

// // Test the function
// let str1 = "madam";
// let str2 = "hello";

// console.log(isPalindrome(str1)); // Output: true
// console.log(isPalindrome(str2)); // Output: false

// =======================3) Find the Largest Number in an Array ========================
// Write a function to find the largest number in an array

// function findLargestNumber(arr) {
//   let largest = arr[0]; // Assume the first element is the largest initially

//   // Loop through the array to find the largest number
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i]; // Update the largest number if a larger one is found
//     }
//   }

//   return largest; // Return the largest number
// }

// // Test the function
// let numbers = [5, 12, 7, 22, 19];
// console.log(findLargestNumber(numbers)); // Output: 22

// =======================4) Remove Duplicate Values from an Array =======================
// Write a function to remove duplicates from an array.
// function removeDuplicates(arr) {
//   let result = []; // Create an empty array to store unique values

//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       // If the element is not in the result array
//       result.push(arr[i]); // Add it to the result array
//     }
//   }

//   return result; // Return the array with unique values
// }

// // Test the function
// let numbers = [1, 2, 3, 4, 2, 1, 5];
// let result = removeDuplicates(numbers);
// console.log(result); // Output: [1, 2, 3, 4, 5]

// =======================5) Sum of an Array =======================
// rite a function that returns the sum of all numbers in an array

// function sumOfArray(arr) {
//     let sum = 0;  // Initialize sum to 0

//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];  // Add each element to sum
//     }

//     return sum;  // Return the total sum
//   }

//   // Test the function
//   let numbers = [1, 2, 3, 4, 5];
//   let result = sumOfArray(numbers);
//   console.log(result);  // Output: 15

// ========================6) FizzBuzz ============================
// Print numbers from 1 to 100, but for multiples of 3, print "Fizz" and for multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".
// for (let i = 1; i <= 100; i++) {
//   // Check if the number is divisible by both 3 and 5
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   }
//   // Check if the number is divisible by 3
//   else if (i % 3 === 0) {
//     console.log("Fizz");
//   }
//   // Check if the number is divisible by 5
//   else if (i % 5 === 0) {
//     console.log("Buzz");
//   }
//   // If the number is not divisible by 3 or 5, print the number
//   else {
//     console.log(i);
//   }
// }

// ==========================7) Sum of Two Numbers (without using the + operator)================
// Write a function to add two numbers without using the + operator.
// function add(a, b) {
//     // Loop until there is no carry
//     while (b !== 0) {
//       // Calculate sum without carry
//       let sum = a ^ b;

//       // Calculate carry, then shift it left by 1
//       let carry = (a & b) << 1;

//       // Assign the sum to a, and carry to b for the next iteration
//       a = sum;
//       b = carry;
//     }

//     return a;
//   }

//   // Test the function
//   console.log(add(5, 3));  // Output: 8
//   console.log(add(10, 15)); // Output: 25

// ======================== 7)Find Missing Number in an Array ==============================
// Given an array of numbers from 1 to N with one missing number, find the missing number
// const arr = [1, 2, 3, 5];
// let missingElement = [];

// const missingEle = (arr) => {
//   let maxValue = Math.max(...arr);
//   let minValue = Math.min(...arr);
//   console.log('Min Value:', minValue);
//   console.log('Max Value:', maxValue);

//   // Loop through the range from minValue to maxValue
//   for (let i = minValue; i <= maxValue; i++) {
//     if (arr.indexOf(i) < 0) {  // If i is not in the array
//       missingElement.push(i);  // Push i to the missingElement array
//     }
//   }

//   return missingElement;
// };

// console.log(missingEle(arr));  // Output: [4]

// function findMissingNumber(arr, N) {
//     // Calculate the expected sum of numbers from 1 to N
//     const expectedSum = (N * (N + 1)) / 2;

//     // Calculate the sum of the numbers in the array
//     const actualSum = arr.reduce((sum, num) => sum + num, 0);

//     // The missing number is the difference
//     return expectedSum - actualSum;
// }

// // Example usage:
// const arr = [1, 2, 4, 5, 6]; // N = 6, the missing number is 3
// const N = 6;
// console.log(findMissingNumber(arr, N)); // Output: 3

// ==========================8)Flatten a Nested Array====================================
// Write a function to flatten a nested array into a single array
// function flattenArray(arr) {
//     let result = [];

//     // Iterate over each element in the array
//     for (let i = 0; i < arr.length; i++) {
//         // If the element is an array, recursively flatten it
//         if (Array.isArray(arr[i])) {
//             result = result.concat(flattenArray(arr[i]));
//         } else {
//             // Otherwise, add the element to the result array
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// // Example usage:
// const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
// console.log(flattenArray(nestedArray));
// // Output: [1, 2, 3, 4, 5, 6, 7]

// ============================9)Find First Non-Repeated Character===================
// Write a function that finds the first non-repeated character in a string.
// function firstNonRepeatedCharacter(str) {
//     // Create a frequency map (object) to store character counts
//     const frequencyMap = {};

//     // Count the occurrences of each character
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       frequencyMap[char] = (frequencyMap[char] || 0) + 1;
//     }

//     // Find the first character with a frequency of 1
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       if (frequencyMap[char] === 1) {
//         return char; // Return the first non-repeated character
//       }
//     }

//     return null; // Return null if there is no non-repeated character
//   }

//   // Test the function
//   console.log(firstNonRepeatedCharacter("swiss"));  // Output: "w"
//   console.log(firstNonRepeatedCharacter("aabbcc"));  // Output: null
//   console.log(firstNonRepeatedCharacter("character"));  // Output: "c"

// =================================10)convert first letter in capital of each of word in javascript=============
// Write a JavaScript function that takes a string as input and returns the string with the first letter of each word capitalized. For example, given the input "hello world", the output should be "Hello World".

// **
// const str = "hello string";
// const firstLetterCap = (s) => {
//   let result = s.split(" ").map((e) => e.charAt(0).toUpperCase() + e.slice(1));
//   return result.join(" ");
// };
// console.log(firstLetterCap(str));

// =============11)count the string length without using built in function=================
// ***
// let str = " hello";
// let count = 0;
// for (let s of str.trim()) {
//   count++;
// }
// console.log("String length:" + count);

// ===========================12)Count Occurrences of a Character in a String================
// Write a function that counts the number of occurrences of a specific character in a string

// ***
// const countCharOccurrences = (str, char) => {
//     let count = 0;
//     // Loop through the string to count occurrences of char
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         count++;
//       }
//     }
//     return count;
//   };

//   // Example usage:
//   const string = "hello world";
//   const character = "l";
//   console.log(countCharOccurrences(string, character)); // Output: 3

// =====================13)Count the length of an array without using built in function
// ***
// let arr = [1, 2, 3, 3, 7];
// let count = 0;
// for (let a of arr) {
//   count++;
// }
// console.log("then length of an array is:" + count);

// ===========================11)Deep Clone an Object================================
// Write a function to perform a deep clone of an object.

// ============================12)Debounce Function==================================
// Implement a debounce function that limits the rate at which a function is executed. Useful for handling user inputs (e.g., on typing).

// ===========================13)Throttle Function================================================
// Implement a throttle function that ensures a function is executed at most once in a specified period of time.

// =============================15)Find Intersection of Two Arrays=============================
// Write a function that returns the intersection of two arrays (i.e., the common elements).

// ===============================16) Find All Permutations of a String=========================
// Write a function that generates all permutations of a string.

// ================================17)Longest Substring Without Repeating Characters===============
// Write a function to find the length of the longest substring without repeating characters.

// ==============================18)Implement a Queue Using Two Stacks===========================
// Implement a queue using two stacks.

// ===============================19)Find the Kth Largest Element in an Array=====================
// Write a function to find the kth largest element in an unsorted array.

// ===============================20)Merge Intervals===========================================
// Given an array of intervals, merge all overlapping intervals.

// ===================================21)Implement an Event Emitter==========================
// Create a basic event emitter where you can register event listeners and emit events.

// ====================================21)LRU Cache (Least Recently Used)========================
// Implement a Least Recently Used (LRU) Cache. The cache should support get and put operations.

// ====================================21) Find All Anagrams in a String=======================
// Write a function that finds all anagrams of a string in a given string.

// ===================================22)Create a Custom Promise Implementation======================
// Implement a simple version of JavaScript's Promise using JavaScript.

// ==================================23) Matrix Rotation========================================
// Rotate a NxN matrix 90 degrees clockwise.

// ==================extra=========================
