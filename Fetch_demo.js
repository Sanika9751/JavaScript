
const prom = fetch("https://dummyjson.com/todos");

// prom.then((v)=>{
//     console.log(v);
// }).catch((e)=>{
//     console.log(e);
// })


// prom.then((v) => {
//     return v.json();
// }).then((v)=>

// {
//     console.log(v);
// })

// .catch((e) => {
//     console.log(e);
// })



prom.then((v) => {
    return v.json();
}).then((v)=>
{
   let arr=new Array(v.todos);
   arr.forEach((i)=>
{
    i.forEach((j)=>{
        if(j.completed==true){
        console.log(j);
        }
        else{
            console.log("failed");

        }
        // console.log("*******************");

    })
    //console.log(i);
})
})

.catch((e) => {
    console.log(e);
})