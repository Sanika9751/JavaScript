let student={
    id:1,
    name:"abc",
    marks:98
}

console.log(Object.seal(student));
student['id']=2;
console.log(student);
console.log(Object.isSealed(student));