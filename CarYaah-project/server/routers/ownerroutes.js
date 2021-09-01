var ownerRouter = require("express").Router();
var ownercontrollers = require("../controllers/ownercontrollers");

ownerRouter.route("/signup").post(ownercontrollers.createOwner);
ownerRouter.route("/signin").post(ownercontrollers.loginOwner);

ownerRouter.post("/creat", ownercontrollers.createOwnerCar);
ownerRouter.get("/get", ownercontrollers.getOwnerCars);
ownerRouter.delete("/delete/:id", ownercontrollers.deleteOwnerCar);
ownerRouter.put("/update/:id", ownercontrollers.updateOwnerCar);

module.exports = ownerRouter;
