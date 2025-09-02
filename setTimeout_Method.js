
function print(){
    console.log("hello");
}
// console.log(print);
// console.log(print());

// setTimeout(print,1000);
// console.log("Hiii");
// console.log("by");

let flag=false;
console.log(flag);
let timer=setTimeout(print,1000);
console.log(flag);
if(flag){
    clearTimeout(timer);
}