const carRouter = require("express").Router();
const carController = require("../controllers/car.controller");

carRouter.route('/').get(carController.retrievAllCars)


module.exports= carRouter;