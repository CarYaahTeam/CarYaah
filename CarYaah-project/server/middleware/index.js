const jwt = require("jsonwebtoken");

exports.generateToken = (user) => {
  return jwt.sign(
    {
      username: user.username,
      password: user.password,
      name: user.name,
      email: user.email,
      adress: user.adress,
      isOwner: user.isOwner,
      isClient: user.isClient,
    },
    process.env.ACCESS_TOKEN_SECRET || "somethingsecret",
    {
      expiresIn: "24h",
    }
  );
};
exports.isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization && authorization.split(" ")[1];
    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET || "somethingsecret",
      (err, user) => {
        if (err) {
          res.status(401).send({ message: "Invalid Token" });
        } else {
          req.user = user;
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: "No Token" });
  }
};
// let authToken = req.body.headers["authorization"];
exports.isOwner = (req, res, next) => {
  if (req.user && req.user.isOwner) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Owner Token" });
  }
};
exports.isClient = (req, res, next) => {
  if (req.user && req.user.isClient) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Client Token" });
  }
};
exports.isClientOrOwner = (req, res, next) => {
  if (req.user && (req.user.isClient || req.user.isOwner)) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Owner/Client Token" });
  }
};
