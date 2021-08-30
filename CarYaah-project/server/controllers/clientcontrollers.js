var db = require("../db/index");
const bcrypt = require("bcryptjs");
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
    res.status(201).json(Client);
    res.send(Client);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
//---------------------LOGIN ONE CLIENT-----------------//

exports.loginClient = async function (req, res) {
  try {
    const client = await db.Client.findAll({
      where: { password: req.body.password },
    });
    !client && res.status(400).json("wrong info");

    const validated = await bcrypt.compare(
      req.body.password,
      client.password,
      client.salt
    );
    !validated && res.status(400).json("wrong info");

    const { password, ...others } = client._doc;
    console.log("other", othersparameters);
    res.status(200).json(others.parameters);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.retrieve = function (req, res) {
  client.findAll({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};
