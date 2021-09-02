var db = require("../db/index");

//---------- ADMIN FETCH ALL CLIENTS------------//
exports.fetchclients = async function (req, res) {
  try {
    const clients = await db.Client.findAll();
    console.log(clients);
    res.status(201).send(clients);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
//------------ADMIN FETCH ALL OWNERS-----------//
exports.fetchowners = async function (req, res) {
  try {
    const owners = await db.Owner.findAll();

    res.status(201).send(owners);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
