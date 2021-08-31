var ownerRouter = require("express").Router();
var ownercontrollers = require("../controllers/ownercontrollers.js");

ownerRouter.post("/owner", ownercontrollers.createOwnerCar);
module.exports = ownerRouter;
