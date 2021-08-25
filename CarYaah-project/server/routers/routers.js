const express = require("express");
const routers = express.Router();

const controller = require("../controllers/controllers.js");


    // get:routers.get("http://localhost:3000/api/reservation", routers.createReservation)
    routers.get("/api/reservation", controller),
 
module.exports = routers