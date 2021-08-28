const express = require("express");
const db = require("./db/index.js");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const clientRouter = require("./routers/clientroutes");
const ownerRouter = require("./routers/ownerroutes");
// var routers = require("./routers/routers.js");

const PORT = 3000;
const sequelize = require("./db/index.js");
// const db = require("./db/index.js");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/register", clientRouter);
app.use("/api/reservation", clientRouter);

app.use(ownerRouter);
app.use("/login", clientRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
