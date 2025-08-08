let arr=[1,2,3,4,5,6,7];

// function greater(n){
//     if(n>4){
//         console.log(n);
//     }
// }

//arr.find(greater);

function greater(n){
    if(n>4){
        return n;
    }
}

console.log(arr.find(greater));