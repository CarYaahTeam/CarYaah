var CarRouter = require("express").Router();
var CarController = require("../controllers/carcontroller");
var verifyToken = require("../middleware/index");
CarRouter.route("/").get(CarController.retrievAllCars);
CarRouter.route("/fav/:carId").get([verifyToken.authClient],CarController.AddNewFav);
module.exports = CarRouter;
