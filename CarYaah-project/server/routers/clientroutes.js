var clientRouter = require("express").Router();
var clientcontroller = require("../controllers/clientcontrollers");

clientRouter.route("/signup").post(clientcontroller.createClient);
clientRouter.route("/signin").post(clientcontroller.loginClient);
// clientRouter.route("/").get(clientcontroller.addReservation);
// clientRouter.route("/deleteclient").delete(clientController.delete);
// clientRouter.route("/").get(clientController.retrieveOne);
// clientRouter.route("/").delete(clientController.deleteOne);
// clientRouter.route("/").put(clientController.updateOne);

module.exports = clientRouter;
