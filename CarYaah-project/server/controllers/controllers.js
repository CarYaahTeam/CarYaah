const db = require("../db");

// exports.createReservation = (req, res) => {
//   var params = [req.body[start_date_av],req.body[end_date_av]]
//   models.car.post(params,function(err,results){
//       res.json(results)
//   })
// };
    // app.get( "/api/reservation", (req, res) =>
    //   db.query.findAll().then( (result) => res.json(result) )
    // );
module.exports =(req, res) => {
    db.Car.findAll({
        start_date_av: req.query.start_date_av,
        end_date_av: req.query.end_date_av
    }).then( (result) => res.json(result)).catch(err=>{
        console.log(err)
    })
}
   
  

