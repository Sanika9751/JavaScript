
function counter(){
    let count=1;

    function demo(){
        console.log(count++);
    }
    return demo;
}

let result=counter();

result();
result();
result();
result();