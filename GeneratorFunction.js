
function* demo(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let obj=demo();

console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());


console.log("***********************************")



function* demo2(){
    yield 1;
    yield 2;
    yield 3;
    return 10;
}

let obj2=demo2();

console.log(obj2.next());
console.log(obj2.next());
console.log(obj2.next());
console.log(obj2.next());
console.log(obj2.next());