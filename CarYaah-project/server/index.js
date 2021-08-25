const express = require("express");
const PORT = 3000;
const sequelize = require("./db/index.js");
// const client= require('./db/models/client')

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "done" });
});

app.post("/owner", (req, res) => {
  console.log("done");
  res.send("success");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
