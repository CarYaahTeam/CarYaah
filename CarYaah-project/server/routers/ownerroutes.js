var ownerRouter = require("express").Router();
var ownercontrollers = require("../controllers/ownercontrollers");

ownerRouter.route("/signup").post(ownercontrollers.createOwner);
ownerRouter.route("/signin").post(ownercontrollers.loginOwner);
ownerRouter.post("/creat", ownercontrollers.createOwnerCar);
ownerRouter.get("/get", ownercontrollers.getOwnerCars);

module.exports = ownerRouter;