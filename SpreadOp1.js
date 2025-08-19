
//****Spread operator on array */
let arr=[1,2,3,4];
let arr1=[5,6,7,8];

let arr2=[...arr,...arr1];
console.log(arr2);

//****** Spread operator on object */
let Student={
    id:1,
    name:"abc",
    marks:97,
    Grade:"A"
}

let stud1={...Student,city:"Pune"};
console.log(stud1);

console.log(Student);