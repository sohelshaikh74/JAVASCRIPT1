// number are stroed in floating point in js like 45 it will store in like 45.0
// (note : number are stored in js are floating point no metter if we spceify floating point or not)
console.log(45 === 45.0);

let now = new Date();
console.log(now.getTime());

// let dateString = now.toISOString("");
// console.log(dateString.split("T")[0]);

let d1 = new Date(12000);
console.log(d1);

let d2 = new Date(24 * 60 * 60 * 1000);
console.log(d2);
