// what is set
// set in collection of unique values set does not have duplicate enteries

// set ==> method and properties
// size,has(),add(),delete(),clear()
// working with arrays
const cities = new Set(["London", "New York", "London", "Delhi"]);

// console.log(cities.has("London"));
cities.add("Tokoyo");
cities.delete("Delhi");

// console.log(cities);
// cities.clear();

// console.log(cities);
// for (let c of cities) {
//   console.log(c);
// }

let randomData = new Set([12, true, "hello", null]);
// console.log(randomData);

// working with string
// let string = "hello";
// let str = new Set(new String("hello"));
// console.log(str.size);
//
// console.log(str.has("n"));

// ===============use case========

// 1. remove the duplicate element from an array
let names = ["john", "mark", "merry", "john"];
let nameset = new Set(names);
console.log(nameset);
const uniqueArray = [...nameset];
console.log(uniqueArray);

// 2. couting number of unique characters in a string
let str1 = "This is String";
let uniqueStr = new Set(str1);
console.log(uniqueStr.size);
