let Student={
    id:1,
    name:"abc",
    marks:98,
    Grade:"A",
    city:"Pune"
}

let{id,name,...obj1}=Student;
console.log(id);
console.log(name);
console.log(obj1);