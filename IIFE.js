
//If we want to execute function immediately
(function (){

    console.log("Hiiii");

    (function (){
        console.log("Hello");
    }());

    console.log("Byeee");

}());