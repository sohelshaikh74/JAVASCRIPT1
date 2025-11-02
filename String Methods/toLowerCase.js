let str = "HELLO WORLD";
let lowerCase = str.toLowerCase();
// console.log(str)
// console.log(lowerCase)

const mixedCase = 'MiXed Case';
const loCase = mixedCase.toLowerCase();
// console.log(mixedCase)
// console.log(loCase)


//usecase of both method
// 1 -> format name with first character in upper case and all other character in lower case
function formatName(name) {
    let firstChar = name.substring(0, 1).toUpperCase()
    let restChar = name.substring(1).toLowerCase()
    console.log(firstChar + restChar)
}
formatName('john');
formatName('mErrY');
formatName('STEVE');


// 2-> value comparison
let userEmail = 'Something@Gmail.com'
let emailInDB = 'something@gmail.com'
console.log(userEmail.toLowerCase() === emailInDB.toLowerCase())
