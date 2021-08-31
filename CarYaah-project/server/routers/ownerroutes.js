var ownerRouter = require("express").Router();
var ownercontroller = require("../controllers/ownercontrollers");

ownerRouter.route("/add").post(ownercontroller.createOwner);
ownerRouter.route("/login").post(ownercontroller.loginOwner);
module.exports = ownerRouter;
