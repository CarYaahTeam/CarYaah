var clientRouter = require("express").Router();
var c = require("../controllers/clientcontrollers");
clientRouter.route("/").post(c.createOne);

clientRouter.route("/").post(clientcontroller.createClient);
clientRouter.route("/").post(clientcontroller.loginClient);
// clientRouter.route("/").get(clientcontroller.addReservation);
// clientRouter.route("/deleteclient").delete(clientController.delete);
// clientRouter.route("/").get(clientController.retrieveOne);
// clientRouter.route("/").delete(clientController.deleteOne);
// clientRouter.route("/").put(clientController.updateOne);

module.exports = clientRouter;
