var ownerRouter = require("express").Router();
var ownercontroller = require("../controllers/ownercontrollers");
ownerRouter.route("/").post(ownercontroller.createOwner);
ownerRouter.route("/").post(ownercontroller.loginOwner);
module.exports = ownerRouter;