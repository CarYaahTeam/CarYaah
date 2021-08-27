const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants");
var db = require("../db/index");
//---------------REGISTER ONE OWNER--------------//
exports.createOwner = async function (req, res) {
  try {
    const owner = await db.Owner.create(req.body);
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

    const validated = await compare(req.body.password, owner.password);
    !validated && res.status(400).json("wrong info");

    const { password, ...others } = owner._doc;
    console.log("other", othersparameters);
    res.status(200).json(others.parameters);
  } catch (err) {
    res.status(500).json(err);
  }
};
