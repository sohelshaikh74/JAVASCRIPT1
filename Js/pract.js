function myFun(a, b) {
  console.log(a + b);
  console.log(arguments);
}
// myFun(1, 2);

const myFun2 = () => {
  console.log(arguments);
};
myFun2();
