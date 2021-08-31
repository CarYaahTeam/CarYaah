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
    res.send(owner);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
//---------------------LOGIN ONE OWNER-----------------//

exports.loginOwner = async function (req, res) {
  try {
    const owner = await db.Onwer.findOne({
      where: { email: req.body.email },
    });
    const validPss = await bcrypt.compare(req.body.password, owner.password);
    if (!owner) {
      res.status(401).json({ message: "Invalid email" });
    } else if (!validPss) {
      res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: owner.id }, process.env.ACCESS_TOKEN_SECRET);
    return res.status(200).json({ data: owner, auth_token: token });
  } catch (err) {
    res.status(500).json(err);
  }
};
