require("dotenv");
var db = require("../db/index");
const bcrypt = require("bcryptjs");
// import { generateToken, isAdmin, isAuth } from "../utils.js";
const utils = require("../middleware/index");
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
      isOwner: req.body.isOwner,
      isClient: req.body.isClient,
      salt: salt,
    });
    res.send({ token: utils.generateToken(client) });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
//---------------------LOGIN ONE CLIENT-----------------//

exports.loginClient = async function (req, res) {
  try {
    const client = await db.Client.findAll({
      where: { email: req.body.email },
    });
    if (client) {
      if (bcrypt.compareSync(req.body.password, client.password, client.salt)) {
        res.send({
          username: req.body.username,
          password: hachedPass,
          name: req.body.name,
          email: req.body.email,
          adress: req.body.adress,
          isOwner: req.body.isOwner,
          isClient: req.body.isClient,
          token: generateToken(client),
        });
      }
    }
    res.status(401).json({ message: "Invalid email or password" });
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

//---------------------user profil---------------------------------//

exports.retrievAllUsers =function(req, res) {
  db.Client.findAll().then( (result) => res.json(result)).catch(err=>{
      console.log(err)
  })
}

