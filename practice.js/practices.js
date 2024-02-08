// //29jan2024
// const a = "Hello, world!";
// b = a.charAt(1); // the charAt() method accepts only one argument,
// //charCodeAt(index) ,this helps to return the integer value from 0 to 65535(return unicode value)
// // which is the index of the character you want to retrieve.(output=e)
// console.log(b);
// // const e = String(1);
// // const b = String(true);
// // console.log(typeof a, typeof b, typeof c, typeof d, typeof e);

// //upperCase and lowercase
// const d = "Hello, world!";
// e = d.toUpperCase();
// console.log(e);
// f = e.toLowerCase();
// console.log(f);

// const s1 = "9*s"; // creates a string primitive
// const s = 2;
// const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s1)); // returns the number 4
// console.log(eval(s2)); // returns the =String{'2+2'}
// console.log(eval(s2.valueOf())); // returns the string 4 value of() helps to give values.
// // eval() is used to convert a string of numbers into proper numbers.but there shouldn't be any character.
// //canonical=standard values
// const a1 = 3;
// const a2 = "po";
// const e2 = "\u103F"; //unicode covers every character  or language in the world."/u followed by 4 hexadecimal digits"
// console.log(e2);

// const a3 = "Hello";
// const dd = a3.charCodeAt(1);
// console.log(dd); //value of e is 101(unicode).output=101
// console.log("?????????????");

// // function to check palindrome
// const toPalindrome = (a) => {
//   const b = String(a);
//   const result = "";
//   for (let i = b.length - 1; i >= 0; i--) {
//     const c = b.charAt(i);
//     if (c === b) {
//       result = result + c;
//       console.log("Palidrome");
//       break;
//     }
//   }
//   return result;
// };
// const pp = 1001;
// const result = toPalindrome(pp);
// console.log(result);

// //chaining
// const cleanAndChain = (o) => {
//   const r = String(o);
//   return r.replaceAll("-", "").toUpperCase();
// };
// const st = "hello-- i m";
// const rrr = cleanAndChain(st);
// console.log(rrr);

// //object(function lai call garda method, data lai call garda property
// const person = {
//   namee: "John",
//   birthyear: 2040,
//   age: function () {
//     return 2080 - this.birthyear;
//   },
//   calAge: () => {
//     return 2080 - person.birthyear;
//   },
// };
// //read
// console.log(person);
// //update
// person.name = "Smriti";
// console.log({ person });
// console.log(person.age());
// console.log(person.calAge());
// //create your own object for car,laptop,tv using CRUD operation.
// const car = {
//   cardes: {
//     model: "lamborgini",
//     color: "red",
//     speed: "fast",
//     sizeInfo: function () {
//       console.log(
//         `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`
//       );
//     },
//   },
// };
// car.cardes.model = "THar";
// console.log(car.cardes); //update
// delete car.cardes.speed; //delete speed
// console.log(car.cardes);

// //spread operator
// const laptop = {
//   model: "DEll",
//   size: "smalls",
//   color: "green",
// };
// //spread=exclude model,...rest(model will be hidden and put this and this helps to collect in one frame.)
// const { model, ...rest } = laptop; //object destructring
// console.log({ rest }); //update

// //31stjan
// // Use given object and loop through its properties
// // and if it has property “discount”
// // print “Already discounted by…”
// // and add the value (how much was the discount).
// // In opposite case,
// // do what you did in the previous exercise:
// // check the price, depending on it
// // (if it’s greater or lower than 100)
// // add discount (10% or 7%) and add the property “discount” to the object.

// //let prod = {
// // name: "headphones",
// //price: 83.7,
// //discount: "7%",
// //};

// // End result should be like this >>
// // end result - case 2:
// // { name: 'headphones', price: '77.84', discount: '7%' }
// // end result - case 1:
// // Already discounted by 7%.

// let prod = {
//   name: "headphones",
//   price: 83.7,
//   discount: "7%",
// };
// for (prop in prod) {
//   if (prop === " discount") {
//     console.log("Already discounted!!!");
//     const disValue = parseFloat(prod.discount) / 100;
//     price = (price * (1 - disValue)) / 100;
//   }
// }
// if (!prop in discount) {
//   if (prod.price > 100) {
//     console.log("discount is 10%");
//   } else if (prod.price < 10) {
//     console.log("discount is 7%");
//   }
// }

//array CRUD[]
//create []
// const newArray = [];
// //read array
// const carc = ["BMW", "TOYOTA"];
// const gggg = [{ nameq: "jaguar", size: "small" }, "hyundai"];
// console.log(first.ggggg[1]);

/*const user = {
  name1: "Smriti",
  dob: 2000,
  address: "kalanki",
  age: function () {
    return new Date().getFullYear() - this.dob;
  },
};
console.log(user.name1);
console.log(user.dob);
console.log(user.address);
console.log(user.age());*/
//read
//console.log(user.name1);
//update
//user.name1 = "shruti";
//console.log(user.name1);
//delete
//user.age();
//console.log(user.age());
//spread
//const { dob,... test}=user;
//console.log({ dob });

//array delete
//user.shift(); //it eliminate first element
//console.log({ user });
//method-shift,reduce,pop(last element eliminate),length,filter,some,every,split,map,unshift,push(data addeda t last)
//methods are present in the string,object,array,date

//4feb,2024
//write a js function that finds the largest sentence in the array
//eg: const countries =["nepal","india","japan","ireland","united kingdom"]
// const countries = ["nepal", "india", "japan", "ireland", "united kingdom"];
// const largestCountry = (countries) =>
//   countries.sort((a, b) => a.length - b.length).pop();
// const result = largestCountry(countries);
// console.log(result);

//write a js function that return the  number n array that are divisible by 5.
//eg: const numbers=[1,4,5,8]:output:[5]
// const numbers = [1, 4, 5, 8];
// const divisibleBy5 = (numbers) =>
//   numbers.filter((numbers) => numbers % 5 === 0);
// const res = divisibleBy5(numbers);
// console.log({ res });

//write a js function that return boolean value when we compare two roles
//eg:
/*const userrole = ["user", "vendor"];
const adminrole = ["admin", "vendor"];
const compare = (role) =>
  userrole.map((userrole) => adminrole.includes(userrole));
const res = compare(userrole);
console.log({ res });*/

//write a js function that return the decimal value in the following array:res=[1.00,2.000,3.00]
// const numeral = [1, 2, 3];
// const decimal = (num) => num.map((num) => num.toFixed(2));
// const ree = decimal(numeral);
// console.log({ ree });

//write a js function that handle pagination
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const page = 1;
// const limit = 2;
//result page1=>[1,2]
//result page2=>[3,4]
//result page3=>[5,6]
//result page10=>[]

/*function paginate(data, page, limit) {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = data.slice(startIndex, endIndex);
  return paginatedData;
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const page1 = paginate(data, 1, 2);
const page2 = paginate(data, 2, 2);
const page3 = paginate(data, 3, 2);
const page4 = paginate(data, 4, 2);
const page10 = paginate(data, 10, 2);

console.log("Result page1 =>", page1);
console.log("Result page2 =>", page2);
console.log("Result page3 =>", page3);
console.log("Result page4 =>", page4);
console.log("Result page10 =>", page10);*/

//write a js function that finds the bird name starting with e character
// const birds = ["parrot", "Eagle", "emus", "Caracars", "egrets"];
//result:["eagle", "emus", "egrets];

// const birds = ["parrot", "Eagle", "emus", "Caracars", "egrets"];
// const startA = birds.filter((birds) => birds.toLowerCase().startsWith("e"));
// console.log(startA);
//or
// const birds = ["parrot", "Eagle", "emus", "Caracars", "egrets"];
// const ebirds = (bird) => bird.filter((bird) => !bird.search(/[eE]/g));
// console.log(ebirds(birds));

//5thfeb
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
//map
//get all array of names
const functionsname = characters.map((characters) => characters.name);
console.log(functionsname);
//get an array of all heights
const ff = characters.map((characters) => characters.height);
console.log(ff);
//get an array of object with just name and height properties
const namef = characters.map((characters) => characters.name);
const heightf = characters.map((characters) => characters.height);
console.log({ namef, heightf });
//get an array of first names.
const nn = characters.map((characters) => characters.name.split(" ")[0]);
console.log(nn);
//reduce
//get the total mass of all characters
// const am = (characters) => {
//   return characters.reduce((a, b) => a + Number(b.mass), 0);
// };
// console.log(am(characters));
//get total heigth of all characters
const he = (characters) => {
  return characters.reduce((d, r) => d + Number(r.height), 0);
};

console.log(he(characters));

//get the total number of characters in all character names
