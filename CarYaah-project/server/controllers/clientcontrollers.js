require("dotenv");
var db = require("../db/index");
const bcrypt = require("bcryptjs");
const utils = require("../middleware/index");
const jwt = require("jsonwebtoken");
//---------------REGISTER ONE CLIENT--------------//
exports.createClient = async function (req, res) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hachedPass = await bcrypt.hash(req.body.password, salt);

    const client = await db.Client.create({
      username: req.body.username,
      password: hachedPass,
      name: req.body.name,
      email: req.body.email,
      adress: req.body.adress,

      salt: salt,
    });
    res.send(client);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
//---------------------LOGIN ONE CLIENT-----------------//

exports.loginClient = async function (req, res) {
  try {
    const client = await db.Client.findOne({
      where: { email: req.body.email },
    });
    const validPss = await bcrypt.compare(req.body.password, client.password);
    if (!client) {
      res.status(401).json({ message: "Invalid email " });
    } else if (!validPss) {
      res.status(401).json({ message: "Invalid password" });
    }
    // createand assign a token
    const token = jwt.sign({ id: client.id }, process.env.ACCESS_TOKEN_SECRET);
    return res.status(200).json({ data: client, auth_token: token });
  } catch (err) {
    res.status(500).json(err);
  }
};
