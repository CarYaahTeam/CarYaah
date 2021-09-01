var ownerRouter = require("express").Router();
var ownercontroller = require("../controllers/ownercontrollers");
var verifyToken = require("../middleware/index");

ownerRouter.route("/signup").post(ownercontroller.createOwner);
ownerRouter.route("/signin").post(ownercontroller.loginOwner);

module.exports = ownerRouter;
