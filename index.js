//print the message
//console.log("hello worlds");
//variables (var,let, const)
//var(ES5))older version
/*var nameStudent = "smriti"; // camelcase for joining two or more words for variables.
nameStudent = "shruti"; // we can rewrite the var keyword.
console.log(nameStudent);
//const,let(ES6) new version
let student = "shyam";
student = "hari";
console.log(student);*/

/*const st = "girl";
// st = "hari"; can't write st(cannot be rewritten.)(single line comment))
console.log(st);*/

/*question create 4 variables using const keyword for (multiline comment))
table, fan, chair, pen.*/
//--------------------------------------------------------//
/*const tableName = "Baltra";
const fanColor = "red";
const chairMove = "moving";
const pen = "black";
console.log(tableName, fanColor, chairMove, pen);
console.log(tableName + fanColor, chairMove, pen);*/
//assignment1,23january

/*Firstly we use var keyword. 
It  has hoisting where hoisting means to moved to current position. 
var can be used if you want function-scoped variables that can be hoisted.
Here in an example, saraswati saraswati is an output because krishna has been discarded by the current value saraswati.
*/

/*var sitaParent = "shyam";
var sitaParent = "rita"; //can redeclare in the same scope.
console.log(sitaParent, sitaParent); //rita rita <-output.*/

/* let keyword.
 let can be used if you want block-scoped variables that can be reassigned. 
*/
//--------------------------------//
/*let hariParent = "saraswati";
let ramParent = "saraswati";
hariParent = "krishna";
// let hariParent = "Saraswati"; can't redeclare in the same scope.
console.log(hariParent + hariParent); //krishnakrishna <-output.
//console.log(hariParent (-,*,%,/) hariParent);->NaN(Not a Number), but for & -> 0.
console.log(ramParent);

//const keyword.
Use const if you want block-scoped variables that are constant and cannot be reassigned.

const pieValue = "3.14";
// pieValue = "Math";(pieValue can't be reassigned because it contains constants values only.)
console.log(pieValue); //3.14 <-output.*/

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

//write a program that welcome user based on their name and password input. ${uName} is to show the uName in display below.
/*const uName = prompt("Enter your name: ");
const password = prompt("Enter your password: ");
//ternary operators(ES6) (if-else and switch is ES5) (for ternary operator=conditon? true: false)
uName === password
  ? alert(`valid ${uName}`)
  : alert("invalid username or password");*/
// if (uName === password) {
//   alert(`valid ${uName}`); //
// } else {
//   alert("invalid username or password");
// }

//write a program that asks user for addition of 2 numbers and alert the result.(assignment-2, "24january")
/*const program1 = prompt("Enter a number: ");
const program2 = prompt("Enter another number: ");
sum = parseInt(program1) + parseInt(program2);
//console.log(sum); when we put this after giving the value of program1 and program2, output value will be  disappeared. and if we alert the result then that will be shown.
alert(`The sum of ${program1} and ${program2} is ${sum}`);*/

//25jan(type conversion/type casting)
/*const userMobileNum = Number(prompt("Enter user mobile number: "));
//console.log(userMobileNum);(go to inspect and console for js...)
alert(`your mobile number is ${userMobileNum}`);*/

/*const date = Number(prompt("Enter date: "));
date === 1
  ? alert(`your date is ${date}`)
  : date === 2
  ? alert(`your date is ${date}`)
  : alert(`${date + 2}`);*/

/*const usName = prompt("Enter user name: ");
const uTime = Number(prompt("Enter time: "));
uTime >= 5 && uTime <= 12
  ? alert(`your time is morning ${usName}`)
  : uTime >= 1 && uTime <= 3
  ? alert(`your time is afternoon ${usName}`)
  : uTime >= 4 && uTime < 5
  ? alert(`your time is evening ${usName}`)
  : alert(`your time is night ${usName}`);*/

//loop
//write a multiplication table for 2,3,5.
const a = Number(prompt("Enter a number: "));
a === 2
  ? alert(`This is multiplication table of 2`)
  : alert(`This isn't multiplication table of 2`);
for (let i = 1; i <= 10; i++) {
  let c = a * i;
  console.log(`${a} x ${i}=${c}`);
}

console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
const b = Number(prompt("Enter a number: "));
b === 3
  ? alert(`This is multiplication table of ${b}`)
  : alert(`This isn't multiplication table of ${b}`);
let j = 1;
while (j <= 10) {
  let d = b * j;
  console.log(`${b} x ${j}=${d}`);
  j++;
}
console.log("!!!!!!!!!!!!!!!!!");

const e = Number(prompt("Enter a number: "));
e === 5
  ? alert(`This is multiplication table of ${e}`)
  : alert(`This isn't multiplication table of ${e}`);
let k = 1;
do {
  let f = e * k;
  console.log(` ${e}*${k}=${f}`);
  k++;
} while (k <= 10);
