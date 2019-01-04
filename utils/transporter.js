const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "eliavahookah@gmail.com",
    pass: "ElHookahDelivery"
  }
});

module.exports = transporter;
