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
/*const a = Number(prompt("Enter a number: "));
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
} while (k <= 10);*/

//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
/*const f = Number(prompt("Enter a Number:"));
f % 3 == 0
  ? alert(`Multiply of ${f}`)
  : f % 7 == 0
  ? alert(`Multiply of ${f}`)
  : alert("Invalid number");*/

//Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
/*const d = Number(prompt("Enter a Number:"));
const e = Number(prompt("Enter a Number:"));
let sum = d + e;
d === e ? alert(`${sum * 3}`) : alert("Invalid number");*/

//write a function to  do multiplication table of 2.
//es5
// function multi(a, b) {
//   return a * b;
// }
// const res1 = multi(2, 1);
// const res2 = multi(2, 2);
// const res3 = multi(2, 3);
// const res4 = multi(2, 4);
// const res5 = multi(2, 5);
// const res6 = multi(2, 6);
// const res7 = multi(2, 7);
// const res8 = multi(2, 8);
// const res9 = multi(2, 9);
// const res10 = multi(2, 10);
// console.log(res1, res2, res3, res4, res5, res6, res7, res8, res9, res10);

//es6
/*const multi = (a, b) => {
  return a * b;
};
const res1 = multi(2, 1);
const res2 = multi(2, 2);
const res3 = multi(2, 3);
const res4 = multi(2, 4);
const res5 = multi(2, 5);
const res6 = multi(2, 6);
const res7 = multi(2, 7);
const res8 = multi(2, 8);
const res9 = multi(2, 9);
const res10 = multi(2, 10);
console.log(res1, res2, res3, res4, res5, res6, res7, res8, res9, res10);*/

// write a function to find area of rectangle
//es5
/*function findArea(l, b) {
  return l * b;
}
const res = findArea(2, 1);
console.log(res);*/

//es6
/*const finddRe = (l, b) => {
  return l * b;
};
const r = finddRe(2, 1);
console.log(r);*/

//..
// const mm = (a) => {
//   let i = 1;
//   do {
//     console.log(mm * i);
//     i++;
//   } while (i <= 10);

// to reverse a number.
/*const rev = (a) => {
  const b = String(a);
  newN = "";
  for (i = a.length - 1; i >= 0; i--) {
    const c = a.charAt(i);
    newN += c;
  }
  return newN;
};
const rr = "1233343";
const d = rev(rr);
console.log(d);*/

//commaformatter(10,000)
/*const a = (n) => {
  const str = String(n);
  let newStr = "";
  counter = 0;
  for (i = str.length - 1; i >= 0; i--) {
    const c = str.charAt(i);
    newStr = c + newStr;
    counter++;
    if (counter % 3 == 0 && i != 0) {
      newStr = "," + newStr;
    }
  }
  return newStr;
};
//newstr="000,01"

const r = "10000";
const rrd = a(r);
console.log(rrd);*/

//write a js function that convert regular text to proper case
/*const toProperCase = (a) => {
  let result = ""; // stored converted text
  let capitalNext = true;

  for (i = 0; i < a.length; i++) {
    const c = a.charAt(i); // convert to proper case
    if (capitalNext) {
      result += c.toUpperCase(); // convert all text to uppercase
      capitalNext = false;
    } else {
      result += c.toLowerCase();
    }
    if (c === "  ") {
      capitalNext = true;
    }
  }
  return result;
};
const tex = "hello, world!";
const pp = toProperCase(tex);
console.log(pp);*/

//write a js function that replaces C++ to mern(I am smriti . I C++. to output I am smriti. I live in C++.)
/*function text(b) {
  const c = String(b);
  result1 = "";
  for (i = 0; i < c.length; i++) {
    const d = c.substring(i, i + 3);
    if (d === "c++") {
      result1 += "mern";
      i += 2;
    } else {
      result1 += c.charAt(i);
    }
  }
  return result1;
}
const ttp = "Hi there, I study c++. ";
const rr = text(ttp);
console.log(rr);*/

// write js function that validates if the user input string is email or not
/*function validate(em) {
  const da = String(em);
  valid = false;
  for (i = 0; i < da.length; i++) {
    const email = da.charAt(i);
    if (email === "@") {
      valid = true;
      break;
    }
  }
  if (valid) {
    console.log(`${da} is a valid.`);
  } else {
    console.log(`${da} is not a valid`);
  }

  return valid;
}
const ee = "smriti@gmail.com";
const rrr = validate(ee);
console.log(rrr);*/

// write js function that counts number of vowel used in the string
//write a js function that check if password is valid or not
//validation rules are:
//atleast 1 lowercase character, 1 uppercase, 1 number, 1symbol and password length>=8
const toCheckPassword = (p) => {
  let valid = true;

  if (p.length < 8) {
    return false; // Password should have a length of at least 8
  }

  for (let i = 0; i < p.length; i++) {
    const char = p.charAt(i);

    if (
      !/[0-9]/.test(char) &&
      !/[A-Z]/.test(char) &&
      !/[a-z]/.test(char) &&
      !/[-!/@/#/$%^&*()+_?:,'"\.]/.test(char)
    ) {
      valid = false;
      break; // Exit the loop if any character doesn't meet the criteria
    }
  }

  return valid;
};

const p3 = "1Ab!ofdjjdA";
const password = toCheckPassword(p3);
console.log(`Is the password valid? ${password}`);
