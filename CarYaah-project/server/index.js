const express = require("express");
const app = express();
var nodemailer = require("nodemailer");
const db = require("./db/index.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const clientRouter = require("./routers/clientroutes");
const ownerRouter = require("./routers/ownerrouters");
const adminRouter = require("./routers/adminrouters");
const nodemailer = require("nodemailer");
const CarRouter = require("./routers/carroutes");
const multer = require("multer");

// CREATES A LOCAL FOLDER
const upload = multer({ dest: "uploads" });
const axios = require("axios");

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "rbk-ana",
  api_key: "444788329552162",
  api_secret: "i-I7UpawmIm_J-8jnKoaLvots5E",
});

const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/client", clientRouter);
app.use("/owner", ownerRouter);
app.use("/admin", adminRouter);

app.use("/api/reservation", clientRouter);
app.use("/cars", CarRouter);
app.use("/api/reservation", clientRouter);

app.post("/upload", upload.any(0), (req, res) => {
  let image = req.files[0].path;
  console.log("REQ========> ", req.files[0].path);
  try {
    cloudinary.uploader.upload(image, (error, result) => {
      error && res.send({ status: false, msg: error });
      res.send({ status: true, msg: result });
    });
  } catch (err) {
    res.send({ status: false, msg: err });
  }
});

app.post("/payment", (req, res) => {
  var obj = {
    receiverWallet: process.env.wallet_id,
    amount: 1000,
    selectedPaymentMethod: "gateway",
    token: "TND",
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    // orderId: req.body.orderId,
    webhook: "merchant.tech/api/notification_payment",
    successUrl: "http://localhost:4200/carInfo",
    failUrl: "http://localhost:4200",
  };
  console.log(obj);
  axios
    .post("https://api.konnect.network/api/v1/payments/init-payment", obj)
    .then((data) => {
      res.json(data.data.payUrl);
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
