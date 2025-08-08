
//************************Code for Scope ********************

//Demo(); // We can call method before defining it
function Demo() {
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);  //It is possible because we are accessing variables inside that function 
    console.log(b);
    console.log(c);

}

//Demo();

// console.log(a);  //It is not possible because we are accessing variables outside that function
// console.log(b);
// console.log(c);
