let numbers = [5, 12, 8, 130, 44]
let index = numbers.findIndex((ele) => {
    return ele > 10;
})
console.log("index", index)

let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
]

//find the index of that user whose id is equal to two
let indexNumber
let indexUser = users.findIndex((ele) => indexNumber = ele.id === 2)
console.log(indexUser)


//indexOf()  
let indexOfElement = numbers.indexOf(130)
console.log(indexOfElement)