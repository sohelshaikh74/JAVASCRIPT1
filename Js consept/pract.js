// fizz buzz problems
for (let i = 1; i <= 100; i++) {
  // check if the number is divisible by both 3 and 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  }
  // check if the number is divisible by 3
  if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
