//====================== indexOf() =====================
// let myString = 'javascript is the best';
//how to extract a character from a string


//=========index based====
//extract first character
// console.log(myString[0]);

//extract 5th character of string
// console.log(myString[6]);

//get total number of character in string
// console.log(myString.length);


//============ length property =================
//using indexing and lenght on hardcoded string value
// console.log('hello'.length);
// console.log('hello'[2]);

//to get index of given charater using indexOf() method
// let myString = 'javascript is the best';
// let index = myString.indexOf('s');  // it will returns a integer value
// console.log(index)
// let myString = 'Javascript is the best'
// console.log(myString.indexOf('best'));/


//================= lastIndexOf() =========================
//getting last index of a chracter
// console.log(myString.lastIndexOf('s'));


//we are passing a character which is not present in the string
// console.log('-----indexOf()---------')
// console.log(myString.indexOf('u'));
// console.log('-----lastIndexOf()---------')
// console.log(myString.lastIndexOf('u'));


// case sensitive
// let myString = 'javascript is the best';
// console.log(myString.indexOf('S'));
// console.log(myString.lastIndexOf('S'));


//=================== slice() =====================
/*
let myString = 'Javascript is the best';

//we want extract substring from myString
//eg. is the best
// console.log(myString.slice(11, 22));

// passing negative start index
// console.log(myString.slice(-1))

//passing negative end index
console.log(myString.slice(5, -2));
*/


// ==================== USE CASE ==========================
/*
let myString = 'Javascript is the best';
//find the first word 
let index = myString.indexOf(' ');
let word = myString.slice(0, index);
// console.log(word)

//find the last word from the string(not character we except word)
let myString1 = 'Hey there! How are doing there today'
let lastIndex = myString1.lastIndexOf(' ') + 1
console.log(lastIndex);
console.log(myString1.slice(lastIndex))
*/

// ======================= Activity ===================
let emp1 = { name: 'John', empCode: 'BLR1122P', gender: 'Male' };
let emp2 = { name: 'Mark', empCode: 'NYC1322C', gender: 'Male' };
let emp3 = { name: 'Merry', empCode: 'LON4321P', gender: 'Female' };

// we want employee name and wheather permanant or cotranct base
// empCode:'BLR1122P'-> IN THIS CODE WE HAVE LOCATION NAME EMP ID AND PERMANANT OR CONTRACT BASED
function printDetails(emp) {
    let empLocation = getLocation(emp.empCode.slice(0, 3));
    let empType = emp.empCode.slice(-1).toLowerCase() === 'p' ? 'Permanant' : 'Contractor';
    console.log(`${emp.name} is working from ${empLocation} office and he/she is a ${empType} employee.`)
}

function getLocation(locationCode) {
    let location;
    switch (locationCode) {
        case 'BLR':
            location = 'Banglore'
            break;
        case 'NYC':
            location = 'New York'
            break;
        case 'LON':
            location = 'London'
            break;
        default:
            location = 'Unknown Location'
    }
    return location;
}
printDetails(emp1);
printDetails(emp2);
printDetails(emp3);
