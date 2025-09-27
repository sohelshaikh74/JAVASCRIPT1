let user = {
  name: "john",
  age: 28,
  gender: "male",
};
// let keys = Object.keys(user).length;
// let keys = Object.keys(user);
// console.log(keys);
// // let sum = 0;
// keys.forEach((key, i) => {
//   //   sum++;
//   console.log("object has total number of properties:" + key);
// });
// console.log("object has total number of properties:" + sum);

// const value = Object.values(user);
// console.log(value);
// for (let i = 0; i < value.length; i++) {
//   console.log(value[i]);
// }

const entries = Object.entries(user);
console.log(entries);
for (let i = 0; i < entries.length; i++) {
  //   console.log(entries[i][0]);
  console.log(
    `Property Name:${entries[i][0]} - Property Value:${entries[i][1]}`
  );
}
