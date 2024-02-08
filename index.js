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

// const QRCode = require("qrcode");
// const canvas = document.getElementById("canvas");

// QRCode.toCanvas(canvas, "sample text", function (error) {
//   if (error) console.error(error);
//   console.log("success!");
// });

// var QRCode = require("qrcode");

// QRCode.toDataURL("I am a pony!", function (err, url) {
//   console.log(url);
// });
// var QRCode = require("qrcode");

// QRCode.toString("I am a pony!", { type: "terminal" }, function (err, url) {
//   console.log(url);
// });

// const CC = require("currency-converter-lt");

// let currencyConverter = new CC();

// let ratesCacheOptions = {
//   isRatesCaching: true, // Set this boolean to true to implement rate caching
//   ratesCacheDuration: 3600, // Set this to a positive number to set the number of seconds you want the rates to be cached. Defaults to 3600 seconds (1 hour)
// };

// currencyConverter = currencyConverter.setupRatesCache(ratesCacheOptions);

const CC = require("currency-converter-lt");
const currencyConverter = new CC();
currencyConverter
  .from("USD")
  .to("GBP")
  .amount(125)
  .convert()
  .then((response) => {
    console.log(response); //or do something else
  });
// let currencyConverter = new CC({ from: "USD", to: "JPY", amount: 100 });

// const _ = require("lodash");
// _.floor(4.006);
