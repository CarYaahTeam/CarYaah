var ownerRouter = require("express").Router();
var ownercontroller = require("../controllers/ownercontrollers");

ownerRouter.route("/signup").post(ownercontroller.createOwner);
ownerRouter.route("/signin").get(ownercontroller.loginOwner);

module.exports = ownerRouter;
