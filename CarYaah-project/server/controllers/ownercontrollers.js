const db = require("../db");
const bcrypt = require("bcryptjs");
exports.createOwnerCar = async (req, res) => {
  try {
    const ownerCar = {
      brand: req.body.brand,
      type: req.body.type,
      start_date_av: req.body.startDate,
      end_date_av: req.body.endDate,
      price: req.body.price,
      // id_owner: 1, //TODO: replace with ID from token
    };

    const car = await db.Car.create(ownerCar);
    return res.status(201).json({ car });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getOwnerCars = async (req, res) => {
  try {
    const cars = await db.Car.findAll();
    return res.status(201).json(cars);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
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
   if(owner){
    return res.status(200).json(owner);
   }
  } catch (err) {
    res.status(500).json(err);
  }
};
