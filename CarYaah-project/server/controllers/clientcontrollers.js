var client = require("../db/models/client");
const db = require("../db");

exports.getCars = (req, res) => {
    
        db.Car.findAll({
            
        }).then( (result) => res.json(result)).catch(err=>{
            console.log(err)
        })
    }

   