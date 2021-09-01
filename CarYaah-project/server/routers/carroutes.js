var CarRouter = require("express").Router();
var CarController = require("../controllers/carcontroller");

CarRouter.route("/").get(CarController.retrievAllCars);

CarRouter.route("/fav/:carId").get(CarController.AddNewFav);
module.exports = CarRouter;
