var CarRouter = require("express").Router();
var CarController = require("../controllers/carcontroller");
var verifyToken = require("../middleware/index");

CarRouter.route("/").get(CarController.retrievAllCars);
CarRouter.route("/fav/:carId").get(verifyToken.authClient,CarController.isFavourite);
CarRouter.route("/fav/:carId").post(verifyToken.authClient,CarController.updateFavourite);
CarRouter.route("/search").get(CarController.searchByTimeFrame);

module.exports = CarRouter;
