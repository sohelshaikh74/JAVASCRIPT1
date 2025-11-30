let myString = 'Javascript is the best';
//toUpperCase() - CONVERT ALL LETTERS OF A STRING TO UPPERCASE
//toLowerCase() - CONVERT ALL LETTERS OF A STRING TO LOWERCASE
/*
let toUpper = myString.toUpperCase();
console.log(toUpper);

let toLower = myString.toLowerCase();
console.log(toLower);
*/

/*
// we want to write a function to which we can pass a word
// that function should convert of that first letter of word into upper case
// and rest all other should be in lowercase
function toUpdateCase(word) {
    let lower = word.toLowerCase();
    // let result = lower.slice(0, 1).toUpperCase() + lower.slice(1).toLowerCase();
    let result = lower[0].toUpperCase() + lower.slice(1).toLowerCase();
    console.log(result);
}
toUpdateCase('welCOme');
toUpdateCase('HELLO');
toUpdateCase('steve');
*/
/*
//johnsmith@gmail.com ===> IN DB
//  JohnSmith@gmail.com ==> In Login form user enter this value
// (note:case are not matching)

let emailInDB = 'johnsmith@gmail.com';
let emailUser = 'JohnSmith@gmail.com';

if (emailInDB === emailUser.toLowerCase()) {
    console.log('You are logged In')
}
else {
    console.log('Email Does not exits in our records')
};
*/


// ========== trim() =================
/*
let str = "    Hello     ";
// console.log(str.trimStart());
// console.log(str.trimEnd());

console.log(str.trimStart().trimEnd());


// console.log(str.trim());
*/

// ================ REPLACING CHARACTER / WORDS IN STRING =================
/*
//we want replace (.) with (!)
let greet = 'Hey there. how are you doing today.';
// let str = greet.replace('.', '!');
// let str = greet.replaceAll('.', '!');
let str = greet.replace('HEy', 'Hello');
console.log(str);
*/


// ========================= include, startWith, and endWith ====================
// let greet = 'Hey there. how are you doing today.';
//includeds()- RETURN TRUE IF A CHARACTER OR A SUBSTRING IS PRESENT INSIDE A STRING
/*
console.log(greet.includes('Hey'));

console.log(greet.includes('Hello'));

//PASSING CHARACTER
console.log(greet.includes('H'));

console.log(greet.includes('hey'));   // CASE SENSITIVE
console.log(greet.includes('T'));
*/

// startWith()
/*
console.log(greet.startsWith('Hey'));
console.log(greet.startsWith('Hey the'))
console.log(greet.startsWith('hey'));  //CASE SENSITIVE
console.log(greet.startsWith('t'));
*/

//endWith()
/*
let greet = 'Hey there. how are you doing today.';
console.log(greet.endsWith('today'));  // missing (.)
console.log(greet.endsWith('y.'));
*/

let str = 'This is the string';
// console.log(str); 
str.replace()  // primitive string --> string object : BOXING 
// string object --> primitive string : UNBOXING


let str2 = new String('This is the another string!');
// console.log(str2);
