//built in nodejs=http,fs,os
//fs use
// const fs = require("fs");
//create a custom node js module
//write a js module that convert string to proper case
const toProperCase = (a) => {
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

module.exports = { toProperCase };

//write a js module that format number in comma
//eg:10000=>10,000
const number = (n) => {
  return n.toLocalString();
};
module.exports = { number };

const slugify = (sentence) => {
  return sentence
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "");
};
