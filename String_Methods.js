//let str="Welcome";

//1) at() method
// console.log(str.at(2));
// console.log(str.at(-1));
// console.log(str.at());
// console.log(typeof(str.at(2)));

//2) charAt() method
// console.log(str.charAt(2));
// console.log(str.charAt(-1));
// console.log(str.charAt());
// console.log(typeof(str.charAt(2)));

//3) charCodeAt() method
// console.log(str.charCodeAt(1));
// console.log(str.charCodeAt(-2));
// console.log(str.charCodeAt());
// console.log(typeof(str.charCodeAt(2)));

// console.log(str[1]);
// console.log(str[-1]);
// console.log(typeof(str[1]));

//4) slice() method
//let str1="Welcome to JS Tutorial";

// console.log(str1.slice(2,6));
// console.log(str1.slice(-2));
// console.log(str1.slice(-4,-2));
// console.log(str1.slice(0,-2));

//5) substring() substr() method
// console.log(str1.substring(1,4));
// console.log(str1.substr(0,3));

//6) toUpperCase() and toLowerCase()
// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());

//7) concat() method
// let str2="Hi";
// console.log(str2.concat(" "+str1)); 
// console.log(str1);
// console.log(str2);

//8) trim() method
// let str3="      abc        ";
// console.log(str3.trim());
// console.log("****"+str3.trimStart());
// console.log(str3.trimEnd()+"***");

//9) padStart() method
// let str4="abcd";
// console.log(str4.padStart(10,"*"));
// console.log(str4.padStart(10,"*").length);
// console.log(str4.padEnd(6,"#"));
// console.log(str4.padEnd(6,"#").length);

//10) repeat() method
// let str5="abcd";
// console.log(str5.repeat(2));
// console.log(str5.repeat());
// console.log(str5.repeat(1));
//console.log(str5.repeat(-1)); //this is not allowed 

//11) split() method
let str6="Welcome to JS Tutorial";

console.log(str6.split(""));
console.log(str6.split(" "));
console.log(str6.split());