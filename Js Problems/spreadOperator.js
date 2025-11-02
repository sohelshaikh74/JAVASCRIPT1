const arr = [1, 2, 3]
const copyArr = [...arr]
// console.log(...arr)
// console.log(copyArr)

const arr1 = [1, 2]
const arr2 = [3, 4]
const newArr = [...arr1, ...arr2]
// console.log(newArr)

// console.log([..."hello"])


let obj1 = { a: 1, b: 2 }
let obj2 = { ...obj1 }
console.log(obj2)

// function d(...number) {
//     console.log(number)
// }
// d(12, 2, 3, 4)

let obj = {
    name: 'john',
    age: 25,
    gender: 'male'
}