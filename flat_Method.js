//******************************** FLAT METHOD *****************************/

let arr=[10,[20,30],40,50,60];

//Here we get problem that the nested array get NaN value so for solve this problem flat method used 
// let arr2=arr.map(doublenum);
// console.log(arr2);

function doublenum(n){
    return n*2;
}


//**Problem solved here** 
// let arr3=arr.flat(1);  //here 1 means depth of an array means number of nested array inside main array

// let arr4=arr3.map(doublenum);
// console.log(arr4);

//If we don't know the number of nested array inside main array then we can use Infinity as a depth of array
let arr5=arr.flat(Infinity);

let arr6=arr5.map(doublenum);
console.log(arr6);
