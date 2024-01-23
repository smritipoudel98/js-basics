//print the message
console.log("hello worlds");
//variables (var,let, const)
//var(ES5))
var nameStudent = "smriti"; // camelcase for joining two or more words for variables.
nameStudent = "shruti"; // we can rewrite the var keyword.
console.log(nameStudent);
//const,let(ES6)
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
hariParent = "krishna";
// let hariParent = "Saraswati"; can't redeclare in the same scope.
console.log(hariParent + hariParent); //krishnakrishna <-output.

/*const keyword.
Use const if you want block-scoped variables that are constant and cannot be reassigned.
*/
const pieValue = "3.14";
// pieValue = "Math";(pieValue can't be reassigned because it contains constants values only.)
console.log(pieValue); //3.14 <-output.
