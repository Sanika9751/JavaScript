//ES6 FEATURE

let arr=[1,2,3,4,5];

let[a,b,c,d,e,f]=arr;
//let[a,b,c,d,e,f=10]=arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

// let[a=1000,b,c,d,e,f=10]=arr;
// console.log(a);


//Skips the one element  =>
let[a1,a2,a3,,a4]=arr;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

//Skips the 3 elements due to ,,, commas
let[a11,b11,,,,c11]=arr;
console.log(a11);
console.log(b11);
console.log(c11);