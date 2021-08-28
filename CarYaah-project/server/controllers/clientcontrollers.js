var db = require("../db/index");

var createOne = async function (req, res) {
  try {
    // const newClient = new db.Client({
    //   username: req.body.username,
    //   password: req.body.password,
    //   email: req.body.email,
    //   name: req.body.name,
    //   adress: req.body.adress,
    // });
    const client = await db.Client.create(req.body);
    res.status(201).json(Client);
    res.send(Client);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

var retrieve = function (req, res) {
  client.findAll({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = { createOne, retrieve };

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
