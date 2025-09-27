// getter and setter
// let john = {
//   name: "john",
//   birthYear: 1990,
//   annualSalary: 12000,

//   get getName() {
//     return "Mr. " + this.name;
//   },
//   set setName(val) {
//     return (this.name = val);
//   },
// };

// john.setName = "john smith";
// console.log(john.getName);

// we can also use getter and setter with class
let User = class {
  constructor(name, pwd, role) {
    this.name = name;
    this.pwd = pwd;
    this.role = role;
  }
  set setPassword(val) {
    if (val.length < 4) {
      console.log("Password should be atleast 4 charaters!");
    } else {
      this.pwd = val;
    }
  }
};
let mark = new User("mark", "pswd123", "admin");
console.log(mark);
mark.setPassword = "abc";
