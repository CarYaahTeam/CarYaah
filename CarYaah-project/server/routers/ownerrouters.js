var ownerRouter = require("express").Router();
var ownercontroller = require("../controllers/ownercontrollers");
var verifyToken = require("../middleware/index");

ownerRouter.route("/signup").post(ownercontroller.createOwner);
ownerRouter.route("/signin").post(ownercontroller.loginOwner);

ownerRouter.post("/creat", ownercontroller.createOwnerCar);
ownerRouter.get("/get", ownercontroller.getOwnerCars);
ownerRouter.delete("/delete/:id", ownercontroller.deleteOwnerCar);
ownerRouter.put("/update/:id", ownercontroller.updateOwnerCar);

ownerRouter.get("/profile", ownercontroller.profileOwner);
ownerRouter.get("/getCar", ownercontroller.addOwnerCarProfile);
ownerRouter.post("/msg", ownercontroller.emailO);

module.exports = ownerRouter;
