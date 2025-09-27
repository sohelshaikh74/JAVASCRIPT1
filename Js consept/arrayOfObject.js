var student = [
  { Name: "Ram", Age: 15 },
  { Name: "Karam", Age: 16 },
  { Name: "Rahul", Age: 14 },
];
for (let i = 0; i < student.length; i++) {
  if (student[i].Name == "Karam") {
    console.log(student[i].Name.toUpperCase(), student[i].Age);
  }
}
