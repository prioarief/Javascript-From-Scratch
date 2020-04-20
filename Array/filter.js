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

let youngStudent = students.filter((result) => {
  return result.age < 17;
});
console.log(youngStudent);
