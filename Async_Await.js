
function checkName(...names){

    const prom=new Promise((resolve,reject)=>
    {
    setTimeout(()=>
    {
        if(names.includes("abc")){
            resolve("name is present");
        }
        reject("name is not present");
    })
},3000);

return prom;

}

async function handlepromise(){

       try{
        let result= await checkName("abcd","def","ghi");
        console.log(result);
       }
       catch(e){
        console.log(e);
       }
}

handlepromise();