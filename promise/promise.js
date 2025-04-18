// // **************** what is Promise in js *************
// A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises allow you to work with asynchronous code in a more manageable and readable way, avoiding the callback hell that can occur with nested callbacks.

// What a Promise represents:
// A Promise is in one of three states:
// Pending: The initial state, neither fulfilled nor rejected. The asynchronous operation is still in progress.
// Fulfilled (Resolved): The operation completed successfully, and the Promise has a resulting value.
// Rejected: The operation failed, and the Promise has a reason for the failure (usually an error).
// How a Promise works:
// You create a Promise using the new Promise() constructor. It takes a function called the executor, which has two parameters:

// resolve: This function is called when the asynchronous operation completes successfully. You pass the result of the operation to it.
// reject: This function is called when the operation fails. You pass the error (or reason) to it.

// let promise = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) {
//     resolve("operation successfull");
//   } else {
//     reject("operation failed");
//   }
// });
// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//Promise.all()
let promise1 = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("operation successfull");
  } else {
    reject("operation failed");
  }
});
let promise2 = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("operation successfull");
  } else {
    reject("operation failed");
  }
});
let promise3 = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("operation successfull");
  } else {
    reject("operation failed");
  }
});

// Promise.all([promise1, promise2, promise3])  // it will check all promise are resolve or not if one of them reject then promise also get rejected
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//   Promise.race()  // check only first one promsie resovel or not if first one is reject then promise get rejected
// Promise.race([promise1, promise2, promise3])
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// Promise.allSettled()   // it will wait for all promise either promise reoslve or rejecte after it will give all promise array
// Promise.allSettled([promise1, promise2, promise3]).then((result) =>
//   console.log(result)
// );

Promise.any([promise1, promise2, promise3]) // .any()  check one of them true( not check sequcnly check randomly) then give promise resolve
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
