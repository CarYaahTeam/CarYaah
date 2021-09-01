var db = require("../db/index");

exports.retrievAllCars = async (req, res) =>{

    try {
        const cars = await db.Car.findAll();
        return res.status(201).json(cars);
      } catch (error) {
         console.log(error)
      }
  }