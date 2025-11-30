// ===================== split() ================;====
/*
let myString = "Javascritp is the best"
let strArray = myString.split(' ');
// console.log(strArray);

let anotherString = 'This-is-the-another-string';
let antoherArray = anotherString.split(' ')
console.log(antoherArray)
*/

// =============== USE CASE OF SPLIT =============
//GET USER FIRST NAME, MIDDLE NAME AND LAST NAME FROM HIS FULL NAME
/*
function printNames(fullName) {
    let [firstName, middleName, lastName] = fullName.split(" ")
    console.log(firstName, middleName, lastName)
}
printNames('John Martin Smith')
*/

// ================= JOIN() METHOD ================
/*
let strArry = ['My', 'name', 'is', 'John'];
let str = strArry.join("-");
console.log(str)
*/

// ================== ACTIVITY ==================
// format the first letter of each name in upper case
/*
function formatName(fullName) {
    let names = fullName.split(" ");
    // let result = names.map((ele) => {
    //     return ele.at(0).toUpperCase() + ele.slice(1).toLowerCase();
    // })
    // return result.join(" ");
    let formattedNames = [];
    for (let name of names) {
        let formatted = name[0].toUpperCase() + name.slice(1);
        formattedNames.push(formatted);
    }
    let name = formattedNames.join(" ");
    console.log(name);
}
formatName('merry ann jordan');
formatName('john martin smith');
*/

// ====================  Padding Mehthods ================
// Padding methods add a number of character to a string until the string has a certain desired length
/*
// 1. padStart() and padEnd( )
let myString = "Javascritp is the best"
console.log(myString.length)
// console.log(myString.padStart(30, '*'));  // first argument desire length and second argument a character which we want to add into string
console.log(myString.padEnd(30, '*'));  // first argument desire length and second argument a character which we want to add into string
*/

// ================ use cases of padStart() and padEnd() =====================
/*
// Mask the CREDIT/DEBIT CARD Details
function maskCardNumber(cardNumber) {
    //convert int to string there are two ways
    // cardNumber = cardNumber.toString();
    cardNumber = cardNumber + "";
    let lastFourDigit = cardNumber.slice(-4);
    let maskCard = lastFourDigit.padStart(cardNumber.length, '*');  //character for masking
    console.log(maskCard);
}
maskCardNumber(2345678912345446)
maskCardNumber('2376383627891234')
*/

// =========================  repeat() ================
// console.log('Hello'.repeat(3));

// ===================  concat() ====================
let str1 = 'Hello';
let str2 = 'World';
let s1 = str1.concat(str2);
console.log(s1);
let s2 = str2.concat(str1);
console.log(s2);