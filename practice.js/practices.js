//29jan2024
const a = "Hello, world!";
b = a.charAt(1); // the charAt() method accepts only one argument,
//charCodeAt(index) ,this helps to return the integer value from 0 to 65535(return unicode value)
// which is the index of the character you want to retrieve.(output=e)
console.log(b);
// const e = String(1);
// const b = String(true);
// console.log(typeof a, typeof b, typeof c, typeof d, typeof e);

//upperCase and lowercase
const d = "Hello, world!";
e = d.toUpperCase();
console.log(e);
f = e.toLowerCase();
console.log(f);

const s1 = "9*s"; // creates a string primitive
const s = 2;
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the =String{'2+2'}
console.log(eval(s2.valueOf())); // returns the string 4 value of() helps to give values.
// eval() is used to convert a string of numbers into proper numbers.but there shouldn't be any character.
//canonical=standard values
const a1 = 3;
const a2 = "po";
const e2 = "\u103F"; //unicode covers every character  or language in the world."/u followed by 4 hexadecimal digits"
console.log(e2);

const a3 = "Hello";
const dd = a3.charCodeAt(1);
console.log(dd); //value of e is 101(unicode).output=101
console.log("?????????????");

// function to check palindrome
const toPalindrome = (a) => {
  const b = String(a);
  const result = "";
  for (let i = b.length - 1; i >= 0; i--) {
    const c = b.charAt(i);
    if (c === b) {
      result = result + c;
      console.log("Palidrome");
      break;
    }
  }
  return result;
};
const pp = 1001;
const result = toPalindrome(pp);
console.log(result);

//chaining
const cleanAndChain = (o) => {
  const r = String(o);
  return r.replaceAll("-", "").toUpperCase();
};
const st = "hello-- i m";
const rrr = cleanAndChain(st);
console.log(rrr);

//object(function lai call garda method, data lai call garda property
const person = {
  namee: "John",
  birthyear: 2040,
  age: function () {
    return 2080 - this.birthyear;
  },
  calAge: () => {
    return 2080 - person.birthyear;
  },
};
//read
console.log(person);
//update
person.name = "Smriti";
console.log({ person });
console.log(person.age());
console.log(person.calAge());
//create your own object for car,laptop,tv using CRUD operation.
const car = {
  cardes: {
    model: "lamborgini",
    color: "red",
    speed: "fast",
  },
};
car.cardes.model = "THar";
console.log(car.cardes); //update
delete car.cardes.speed; //delete speed
console.log(car.cardes);
