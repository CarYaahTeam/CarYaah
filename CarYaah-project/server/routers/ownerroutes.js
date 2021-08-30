var ownerRouter = require("express").Router();
var ownercontrollers = require("../controllers/ownercontrollers");

ownerRouter.route("/").post(ownercontrollers.createOwner);

ownerRouter.route("/").post(ownercontrollers.loginOwner);

ownerRouter.post("/owner", ownercontrollers.createOwnerCar);
module.exports = ownerRouter;
