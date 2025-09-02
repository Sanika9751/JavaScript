// let count=1;
// function demo(){
//     console.log(count);
//     count++;
//     if(count>5){
//         clearInterval(interval);
//     }
// }

// let interval=setInterval(demo,1000);



let str="a";
function demo(){
    console.log(str);
    str+="a";
    if(str.length>5){
        clearInterval(interval);
    }
}

let interval=setInterval(demo,1000);

