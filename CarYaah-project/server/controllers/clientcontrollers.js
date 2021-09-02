require("dotenv");
var db = require("../db/index");
const bcrypt = require("bcryptjs");
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
      expiresIn: "24h",
    });
    delete client.password;

    return res.status(200).json({ data: client, auth_token: token });
  } catch (err) {
    res.status(403).json(err.message);
  }
};
