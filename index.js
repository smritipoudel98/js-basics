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
// const validator = require("email-validator");

// const a = validator.validate("test@email.com"); // true
// console.log(a);

//generate pdf from text and image
// const fs = require("fs");
// const PDFDocument = require("pdfkit");

// // Create a new PDF document
// const doc = new PDFDocument();

// // Pipe the PDF output to a file
// const outputStream = fs.createWriteStream("output.pdf");
// doc.pipe(outputStream);

// // Add text to the PDF
// doc.fontSize(24).text("Example PDF with Text and Images", { align: "center" });

// // Add an image to the PDF
// // doc.image("E:photosIMG_20211015_120024.jpg", { width: 400, align: "center" });

// // Add more text
// // doc
// //   .fontSize(16)
// //   .text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.", {
// //     align: "justify",
// //     lineGap: 10,
// //   });

// // // Finalize the PDF
// // doc.end();

// // // Log a message when the PDF generation is complete
// // outputStream.on("finish", () => {
// //   console.log("PDF generated successfully.");
// // });

// const axios = require("axios");

// // OpenWeatherMap API URL and API key
// const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// const API_KEY = "c6c643f3d8cf1a5de41efc636bb18524";

// // // Function to fetch weather data
// async function fetchWeather(cityName) {
//   try {
//     const response = await axios.get(API_URL, {
//       params: {
//         q: cityName,
//         appid: API_KEY,
//         units: "metric", // You can change units to 'imperial' for Fahrenheit
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//     throw error;
//   }
// }

// // Example usage
// const cityName = "London"; // Example city name
// fetchWeather(cityName)
//   .then((data) => {
//     console.log("Weather data:", data);
//     // Handle weather data here
//   })
//   .catch((error) => {
//     // Handle error
//   });

// const { mailer } = require("./practice");
// const sendMail = async (email, sub) => {
//   return mailer(email, sub);
// };
// sendMail("ishupoudel27@gmail.com", "hi ishu").then((res) => {
//   console.log(res);
// });

const { hash, checkPassword } = require("./practice");
const encrP = (password) => {
  return hash(password);
};
const checkP = (pass, hPass) => {
  return checkPassword(pass, hPass);
};
const e = encrP("rrr");
console.log({ e });
const f = checkP("rrr", e);
console.log({ f });
