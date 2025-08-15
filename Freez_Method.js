let student={
    id:1,
    name:"abc",
    marks:98
}
console.log(Object.freeze(student));
student["grade"]="A";
delete student.id;
console.log(student);
console.log(Object.isFrozen(student));