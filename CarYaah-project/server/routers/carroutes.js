var CarRouter = require("express").Router();
var CarController = require("../controllers/carcontroller");
var verifyToken = require("../middleware/index");
CarRouter.route("/").get(CarController.retrievAllCars);
CarRouter.route("/fav/:carId").get(verifyToken.authClient,CarController.isFavourite);
CarRouter.route("/fav/:carId").post(verifyToken.authClient,CarController.updateFavourite);
<<<<<<< HEAD
CarRouter.route("/search").get(CarController.searchByTimeFrame);
=======
>>>>>>> 31902d1901333c1ceeb0ae467659834176d8252b
module.exports = CarRouter;
