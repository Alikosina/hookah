var express = require("express");
const path = require("path");
var app = express();
var Database = require("./utils/db");
var Info = require("./utils/Info");
const nodemailer = require("nodemailer");
const transporter = require("./utils/transporter");
const bodyParser = require("body-parser");

// Database._connect();

// parse application/json
app.use(bodyParser.json());

// app.use(function(req, res) {
//   res.setHeader("Content-Type", "text/plain");
//   res.write("you posted:\n");
//   res.end(JSON.stringify(req.body, null, 2));
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/getres", (req, res) => res.send({ title: "Hello World!" }));

app.get("/getInfo", (req, res) => {
  Info.findOne().then(response => {
    res.send(response);
  });
});

const createText = products => {
  const nextProducts = products.filter(p => p.count > 0);
  let str = "";
  nextProducts.forEach(product => {
    console.log("product = ", product);
    str += `Тип кальяна - ${product.title}, количество - ${
      product.count
    }, вкус - ${product.taste.label}. <br />`;
  });
  return str;
};

app.post("/send", (req, res) => {
  console.log("req =", req.body);
  // setup email data with unicode symbols
  let mailOptions = {
    from: "eliavahookah@gmail.com", // sender address
    to: "eliavahookah@gmail.com", // list of receivers
    subject: "Subject of your email", // Subject line
    html: `<p>Имя: ${req.body.name}</p><p>Телефон: ${
      req.body.phone
    }</p><p>Заказ: <br /> ${createText(req.body.products)}</p>` // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
  res.send("Success!!!");
});

app.post("/callback", (req, res) => {
  console.log("req =", req.body);
  // setup email data with unicode symbols
  let mailOptions = {
    from: "eliavahookah@gmail.com", // sender address
    to: "eliavahookah@gmail.com", // list of receivers
    subject: "Subject of your email", // Subject line
    html: `<p>Обратный звонок: <br /> ${req.body.callbackPhone}</p>` // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
  res.send("Success!!!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8081, function() {
  console.log("Example app listening on port 8081!");
});
