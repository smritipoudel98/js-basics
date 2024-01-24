//print the message
console.log("hello worlds");
//variables (var,let, const)
//var(ES5))older version
var nameStudent = "smriti"; // camelcase for joining two or more words for variables.
nameStudent = "shruti"; // we can rewrite the var keyword.
console.log(nameStudent);
//const,let(ES6) new version
let student = "shyam";
student = "hari";
console.log(student);

const st = "girl";
// st = "hari"; can't write st(cannot be rewritten.)(single line comment))
console.log(st);

/*question create 4 variables using const keyword for (multiline comment))
table, fan, chair, pen.*/
const tableName = "Baltra";
const fanColor = "red";
const chairMove = "moving";
const pen = "black";
console.log(tableName, fanColor, chairMove, pen);
console.log(tableName + fanColor, chairMove, pen);
//assignment1

/*Firstly we use var keyword. 
It  has hoisting where hoisting means to moved to current position. 
var can be used if you want function-scoped variables that can be hoisted.
Here in an example, saraswati saraswati is an output because krishna has been discarded by the current value saraswati.
*/
var sitaParent = "shyam";
var sitaParent = "rita"; //can redeclare in the same scope.
console.log(sitaParent, sitaParent); //rita rita <-output.

/* let keyword.
 let can be used if you want block-scoped variables that can be reassigned. 
*/
let hariParent = "saraswati";
let ramParent = "saraswati";
hariParent = "krishna";
// let hariParent = "Saraswati"; can't redeclare in the same scope.
console.log(hariParent + hariParent); //krishnakrishna <-output.
//console.log(hariParent (-,*,%,/) hariParent);->NaN(Not a Number), but for & -> 0.
console.log(ramParent);
/*const keyword.
Use const if you want block-scoped variables that are constant and cannot be reassigned.
*/
const pieValue = "3.14";
// pieValue = "Math";(pieValue can't be reassigned because it contains constants values only.)
console.log(pieValue); //3.14 <-output.

//24jan 2024
/*const isFemale = confirm("Are you female?"); // boolean value for confirm.
console.log(isFemale);

const address = prompt("Please enter your address"); //question asked in prompt.
console.log(address);

alert("You are now connected"); //message in alert.
let x; //undefined
*/
// const address = prompt("Please enter your address:(m/n)");

// if (address === "m") {
//   alert("You are from kathmandu");
// } else {
//   alert("You are from different city");
// }

// switch (address) {
//   case "m":
//     alert("You are from kalanki");
//     break;
//   case "n":
//     alert("You are from different");
//     break;
//   default:
//     alert("Invalid address");
//     break;
// }
//write a program that welcome user based on their name and password input.
const uName = prompt("Enter your name: ");
const password = prompt("Enter your password: ");
if (uName === password) {
  alert(`valid ${uName}`);
} else {
  alert("invalid username or password");
}
