const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const tutorial = {
    brand: req.body.brand,
    type: req.body.type,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    available: req.body.available,
    notavailable: req.body.notavailable,
    price: req.body.price,
  };

  Tutorial.create(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || " error ",
      });
    });
};
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
   
  

