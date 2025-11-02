const arr = [1, 2, 3]
const newArr = [-1, 0, ...arr]
console.log(newArr)

// const [a, b, ...rest] = [1, 2, 3, 4, 5];
// console.log(a, b, rest)

let obj = { a: 1, b: 2, c: 3, d: 4 }
let { a, b, ...restObj } = obj
console.log(obj)
console.log(a, b, restObj)