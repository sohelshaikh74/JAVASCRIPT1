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

// ======================== 7)Find Missing Number in an Array ==============================
// Given an array of numbers from 1 to N with one missing number, find the missing number

// ==========================8)Flatten a Nested Array====================================
// Write a function to flatten a nested array into a single array

// ============================9)Find First Non-Repeated Character===================
// Write a function that finds the first non-repeated character in a string.

// ===========================10)Count Occurrences of a Character in a String================
// Write a function that counts the number of occurrences of a specific character in a string

// ===========================11)Deep Clone an Object================================
// Write a function to perform a deep clone of an object.

// ============================12)Debounce Function==================================
// Implement a debounce function that limits the rate at which a function is executed. Useful for handling user inputs (e.g., on typing).

// ===========================13)Throttle Function================================================
// Implement a throttle function that ensures a function is executed at most once in a specified period of time.

// ==========================14) Sum of Two Numbers (without using the + operator)================
// Write a function to add two numbers without using the + operator.

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
