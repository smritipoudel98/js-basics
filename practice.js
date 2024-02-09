// const truncate = (g) => {
//   return g.slice(0, 2) + "...";
// };
// module.exports = { truncate };

//write a node module to send an email(nodemailer)
//write a node module to encrypt the password(bcryptjs)

// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//     user: "",
//     pass: "",
//   },
// });

// // // async..await is not allowed in global scope, must use a wrapper
// const mailer = async (email, subject) => {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: '"Ishu poudel" <foo@example.com>', // sender address
//     to: email, // list of receivers
//     subject: subject, // Subject line
//     html: "<b>Hello world?</b>", // html body
//   });
//   return info.messageId; //
// };

// module.exports = { mailer };

//module to encrypt password
const bcrypt = require("bcryptjs");
const hash = (password) => {
  return bcrypt.hashSync(password, 10);
};
const checkPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
module.exports = { hash, checkPassword };
