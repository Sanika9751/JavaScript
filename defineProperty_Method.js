let student = {
    id: 1,
    name: "abc"
}

Object.defineProperty(student, 'marks', {
    value: 98,
    enumerable: true,  //allow to display
    writable: true,
    configurable: true   //allow to delete the property 
});


//console.log(student.marks);

//console.log(student);

// student.marks=99;

// console.log(student);

// delete student.marks;

// console.log(student);



// console.log(Object.getOwnPropertyDescriptor(student,"marks"));

// console.log(Object.getOwnPropertyDescriptors(student));


Object.defineProperties(student, {
    "grade": {
        value: "A",
        enumerable: true,  //allow to display
        writable: true,
        configurable: true
    },
    "std": {
        value: 10,
        enumerable: true,  //allow to display
        writable: true,
        configurable: true
    }
});

//console.log(student);

console.log(Object.getOwnPropertyDescriptors(student));