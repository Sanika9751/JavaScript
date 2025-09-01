
function demo(){

    let age=20;

    const prom=new Promise((resolve,reject)=>{
        if(age>18){
            return resolve("Eligible");
        }
            return reject("not eligible");
    })
    return prom;
}

demo().then((v)=>{
    console.log(v);
}).catch((e)=>{
    console.log(e);
})

console.log("*********************");