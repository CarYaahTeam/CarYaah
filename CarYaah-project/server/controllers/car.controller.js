const db = require('../db/index')


module.exports.retrievAllCars =function(req, res) {
    db.Car.findAll().then( (result) => res.json(result)).catch(err=>{
        console.log(err)
    })
  }


