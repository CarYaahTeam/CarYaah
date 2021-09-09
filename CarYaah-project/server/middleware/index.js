const jwt = require("jsonwebtoken");
const db = require("../db");

exports.authClient = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(req.headers);
    if (!token) throw new Error("Access Denied");

    const { id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    client = await db.Client.findOne({ where: { id } });

    if (!client) throw new Error("Access Denied client");
    req.client = client;
    next();
  } catch (err) {
    return res.status(403).send(err.message);
  }
};
exports.authOwner = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) throw new Error("Access Denied");

    const { id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const owner = await db.Onwer.findOne({ where: { id } });

    if (!owner) throw new Error("Access Denied");
    req.owner = owner.dataValue;
    next();
  } catch (err) {
    return res.status(403).send(err.message);
  }
};
