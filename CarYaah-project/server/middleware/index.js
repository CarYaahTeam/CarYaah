const jwt = require("jsonwebtoken");
exports.auth = (req, res, next) => {
  const token = req.body.auth_token;
  if (!token) {
    return res.status(401).send("Access Denied");
  }
  try {
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.data = verified;
  } catch (err) {
    return res.status(400).send("Invalid Token");
  }
};
