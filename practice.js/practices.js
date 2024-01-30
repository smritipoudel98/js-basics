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
