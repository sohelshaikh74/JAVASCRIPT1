let names = ["john", "smith", "sarah", "mark", "bob", "charlie"]
//sort(), reveres(), and splice() these method are modify the origin array
console.log("without using any buit method", names)
// console.log(names.sort())

let copy = names.slice()
// console.log(copy.sort())


//ES2023
//toReverse(), toSorted(), toSplice() these mtehod are not modify the origin array 
console.log("toSorted()", names.toSorted())
//not modify the orign array
console.log(names)
