var clientRouter = require("express").Router();
var c = require("../controllers/clientcontrollers");
clientRouter.route("/").post(c.createOne);

// get:routers.get("http://localhost:3000/api/reservation", routers.createReservation)
// clientRouter.route("/").get(clientController.addReservation);

// clientRouter.route("/getallclients").get(clientController.retrieve);

// clientRouter.route("/").get(clientcontroller.retrieve);
// clientRouter.route("/").get(clientcontroller.addReservation);
// clientRouter.route("/deleteclient").delete(clientController.delete);
// clientRouter.route("/").get(clientController.retrieveOne);
// clientRouter.route("/").delete(clientController.deleteOne);
// clientRouter.route("/").put(clientController.updateOne);

module.exports = clientRouter;
