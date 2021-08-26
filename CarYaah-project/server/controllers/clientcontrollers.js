var client = require("../db/models/client");

exports.createOne = function (req, res) {
  const data = req.body;
  client.create(data, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send({ msg: "okey" });
    }
    console.log("in createone", result);
  });
};

module.exports.addReservation =function(req, res) {
  db.Car.findAll({
      start_date_av: req.query.start_date_av,
      end_date_av: req.query.end_date_av
  }).then( (result) => res.json(result)).catch(err=>{
      console.log(err)
  })
}

// exports.retrieve = function (req, res) {
//   client.find({}, function (err, result) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// };

// exports.retrieveOne = function (req, res) {
//   client.findOne({ _id: req.params.id }, function (err, result) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// };

// exports.updateOne = function (req, res) {
//   client.findByIdAndUpdate(
//     { _id: req.params.id },
//     req.body.id,
//     function (err, result) {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// };

// exports.delete = function (req, res) {
//   client.delete({}, function (err, result) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// };

// exports.deleteOne = function (req, res) {
//   client.findByIdAndDelete({ _id: req.params.id }, function (err, result) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// };
