var db = require("../db/index");

exports.createOne = async function (req, res) {
  try {
    const client = await db.Client.create(req.body);
    res.status(201).json(Client);
    res.send(Client);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.retrieve = function (req, res) {
  db.Client.findAll({}, function (err, result) {
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
