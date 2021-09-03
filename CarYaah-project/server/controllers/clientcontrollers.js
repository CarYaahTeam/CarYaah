require("dotenv");
var db = require("../db/index");
const bcrypt = require("bcryptjs");
const axios = require("axios");
const jwt = require("jsonwebtoken");
//---------------REGISTER ONE CLIENT--------------//
exports.createClient = async function (req, res) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hachedPass = await bcrypt.hash(req.body.password, salt);
    const client = await db.Client.create({
      username: req.body.username,
      email: req.body.email,
      password: hachedPass,
      name: req.body.name,
      adress: req.body.adress,
      salt: salt,
    });
    res.status(201).send(client);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
//---------------------LOGIN ONE CLIENT-----------------//

exports.loginClient = async function (req, res) {
  try {
    const { email, password } = req.body;
    const client = await db.Client.findOne({
      where: { email },
    });
    if (!client) throw new Error("Invalid email");

    const validPss = await bcrypt.compare(password, client.password);
    if (!validPss) throw new Error("Invalid password");

    // create and assign a token
    const token = jwt.sign({ id: client.id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: 10,
    });
    delete client.password;

    return res.status(200).json({ data: client, auth_token: token });
  } catch (err) {
    res.status(403).json(err.message);
  }
};

exports.payClient = async function (req, res) {
  try {
    var obj = {
      receiverWallet: process.env.wallet_id,
      amount: req.body.amount,
      selectedPaymentMethod: "gateway",
      token: "TND",
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      // orderId: req.body.orderId,
      webhook: "merchant.tech/api/notification_payment",
      successUrl: "http://localhost:4200",
      failUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    };
    axios
      .post(
        "https://api.preprod.konnect.network/api/v1/payments/init-payment",
        obj
      )
      .then((url) => {
        res.status(201).send(url);
      });
  } catch {
    res.send(err);
  }
};
