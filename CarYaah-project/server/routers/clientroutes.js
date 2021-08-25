var clientRouter = require("express").Router();
var clientController = require("../controllers/clientcontrollers");

clientRouter.route("/").post(clientController.createOne);
// clientRouter.route("/getallclients").get(clientController.retrieve);
// clientRouter.route("/deleteclient").delete(clientController.delete);

// clientRouter.route("/").get(clientController.retrieveOne);
// clientRouter.route("/").delete(clientController.deleteOne);
// clientRouter.route("/").put(clientController.updateOne);

module.exports = clientRouter;
