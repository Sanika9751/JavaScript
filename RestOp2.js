function sum(a,b,...c){
    let result=c.reduce((n1,n2)=>
    {
        n=n1+n2;
        return n;
    });
    console.log(a+b+result);
}

sum(10,20,30);
sum(10,30,40);