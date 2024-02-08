// space in object
// let employee = {
//   name: "smriti",
//   age: 23,
//   roll: 31,
//   "channel 2": "deees",
// };
// const res = employee["channel 2"];
// console.log(res);

//Make an array of numbers that are doubles of the first array
// let array = [1, 2, 3, 4];
// let a = array.map((value) => Math.pow(value, 2));

// console.log(a);

// filter()
// const a = ["ram", "shyam", 12, 34, 6];
// const b = a.filter((value) => value > 6);
// console.log(b);
// reduce()
// const a = [10, 34, 6, "hari"];
// const b = a.reduce((value1, value2) => value1 + value2);
// console.log(b);
//Slice();
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const ss = arr.slice(2, 7); //output 3,4,5,6,7(2to6 inclusive and 8 which is in 7Th position is exclusive)
// console.log(ss);
Splice();
const spl = ["teddy", "bear", "ram", "shyam", "hari"];
const dd = spl.splice(1, 3, "hello", "bye");
console.log(spl);
