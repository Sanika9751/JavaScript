
function account(){
    let balance=100000;

    function deposit(v)
    {
        balance+=v;
        console.log("balance after deposit :"+balance);
    }

    function withdraw(v){
        if(balance<v){
            console.log("Insufficient balance");
        }
        else{
            balance-=v;
            console.log("Balance after withdraw :"+balance);
        }
    }

    function retrunbalance(){
        console.log(balance);
    }
    return [deposit,withdraw,retrunbalance];
}

let [deposit,withdraw,retrunbalance]=account();

// deposit(200000);
// withdraw(100000);
// retrunbalance();

deposit(100000);
retrunbalance();