const array = ['apple', 'banana', 'cherry', 'date']
// console.log(array.at(0))
// console.log(array.at(2))
// console.log(array.at(-1))
// console.log(array.at(-2))

//equivalent using bracket notation
// console.log(array[array.length - 1])

// console.log(array.at(5))
// console.log(array.at(-5))


let str = "hello";
// console.log(str.at(1)); 



//usecase format the name first letter captial and rest of character are small
function formatName(name) {
    let firstChar = name.at(0).toUpperCase();
    let restChar = name.substring(1).toLowerCase()
    console.log(firstChar + restChar)
}
formatName('joHN')