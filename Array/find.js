let students = [
  {
    name: "Prio",
    age: 17,
  },
  {
    name: "Arief",
    age: 16,
  },
  {
    name: "Prio",
    age: 15,
  },
];

let youngStudent = students.find(result=> {
    return result.age >= 15
}) 
console.log(youngStudent);
