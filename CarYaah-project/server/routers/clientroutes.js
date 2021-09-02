var clientRouter = require("express").Router();
var clientcontroller = require("../controllers/clientcontrollers");
var verifyToken = require("../middleware/index");

clientRouter.route("/signup").post(clientcontroller.createClient);
clientRouter.route("/signin").post(clientcontroller.loginClient);
clientRouter.route("/retrieve").get(clientcontroller.retrievAllUsers);
// clientRouter.route("/").get(carController.getFavCars);
module.exports = clientRouter;
