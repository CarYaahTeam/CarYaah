var clientRouter = require("express").Router();
var clientcontroller = require("../controllers/clientcontrollers");
var verifyToken = require("../middleware/index");
clientRouter.route("/signup").post(clientcontroller.createClient);
clientRouter.route("/signin").post(clientcontroller.loginClient);
clientRouter.route("/retrieve").get(clientcontroller.retrievAllUsers);
clientRouter.route("/fav").get(verifyToken.authClient,clientcontroller.retrieveFavorites);
module.exports = clientRouter;
