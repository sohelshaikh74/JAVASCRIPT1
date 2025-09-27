function greet(name) {
  return function (message) {
    console.log(name + " hello " + message);
  };
}
const sayHi = greet("sohel");
sayHi("how are you");
