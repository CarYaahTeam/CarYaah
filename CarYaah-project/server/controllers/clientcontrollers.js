var client = require("../db/models/client");
var db = require("../db/index");
exports.createOne = function (req, res) {
  try {
    const data = req.body;
    var test = db.create(data);
  } catch {
    (e) => {
      console.log(e);
    };
  }
};

exports.retrieve = function (req, res) {
  client.findAll({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

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
