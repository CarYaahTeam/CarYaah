var db = require("../db/index");
const bcrypt = require("bcryptjs");

//---------------REGISTER ONE OWNER--------------//
exports.createOwner = async function (req, res) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hachedPass = await bcrypt.hash(req.body.password, salt);
    const owner = await db.Owner.create({
      username: req.body.username,
      password: hachedPass,
      name: req.body.name,
      email: req.body.email,
      adress: req.body.adress,
      salt: salt,
    });
    res.status(201).json(Owner);
    res.send(Owner);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
//---------------------LOGIN ONE OWNER-----------------//

exports.loginOwner = async function (req, res) {
  try {
    const owner = await db.Onwer.findAll({
      where: { password: req.body.password },
    });
    !owner && res.status(400).json("wrong info");

    const validated = await bcrypt.compare(
      req.body.password,
      owner.password,
      owner.salt
    );
    !validated && res.status(400).json("wrong info");

    const { password, ...others } = owner._doc;
    console.log("other", others);
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};
