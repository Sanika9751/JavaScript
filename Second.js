
console.log("Operations on undefined value");
var city;

console.log(city);  //undefined
console.log(city+1);   //Mathmatical operation   undefined=>NaN  and answer will be NaN
console.log(city+"  a");  //in case of String operation undefined + that string 

console.log("Operations on Null value");

var name=null;
console.log(name); //null
console.log(name+1); //In Mathmatical operation null=>0 so answr will be 0+that operation
console.log(name+"  B"); //in case of string operation null+ that operation