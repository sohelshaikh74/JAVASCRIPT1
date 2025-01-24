const a = 10;
(function () {
  console.log(a);
  var a = 20;
})();

function myFun() {
  console.log(a);
  const a = 20;
}
myFun();
