var CarRouter = require("express").Router();
var CarController = require("../controllers/carcontroller");

CarRouter.route("/").get(CarController.retrievAllCars);

module.exports = CarRouter;