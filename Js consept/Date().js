let date1 = new Date();
console.log(date1);

//sequence year,month,date,hours,minute,second,milisecond
//generate specifi date  and time we can use this constructor
// let date = new Date(2025, 3, 5, 5, 15, 10, 0);
// console.log(date);
//if you did not pass minute, second and milisecond js will take as 00:00:00

//if you did not pass a date from date() constructor then js will take bydefault 1 date
let date = new Date(2025, 3);
console.log(date);
