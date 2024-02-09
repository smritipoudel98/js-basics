// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       "Content-Type": "application/json",
//     });
//     res.end(
//       JSON.stringify({
//         data: "Hello world",
//       })
//     );
//   })
//   .listen(8000);
// console.log("Application is running");

// const slug = require("slug");
// const test = require("./practice");
// const lodash = require("lodash");
// const sub = test.slug("This is an Example String");
// const res = slug("This is an Example String");
// console.log({ sub, res });

// const input = lodash.truncate("This is an Example String", { length: 10 });
// console.log({ input });

// var QRCode = require("qrcode");
// QRCode.toString("I am a pony!", { type: "terminal" }, function (err, url) {
//   console.log(url);
// });

// const CC = require("currency-converter-lt");
// const currencyConverter = new CC();
// currencyConverter
//   .from("USD")
//   .to("GBP")
//   .amount(125)
//   .convert()
//   .then((response) => {
//     console.log(response); //or do something else
//   });

//dividendConverter
// const floor = (a) => Math.floor(a);
// const _ = require("lodash");
// const ress = _.floor(4.006);
// console.log(ress);

//emailvalidator
const validator = require("email-validator");

const a = validator.validate("test@email.com"); // true
console.log(a);
