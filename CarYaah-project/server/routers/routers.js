const express = require("express");
const routers = express.Router();

// const controllers= require("../controllers/controllers.js");
const clientcontrollers= require("../controllers/clientcontrollers.js");

    // get:routers.get("http://localhost:3000/api/reservation", routers.createReservation)
    routers.get("/api/cars", clientcontrollers.getCars),
 
module.exports = routers