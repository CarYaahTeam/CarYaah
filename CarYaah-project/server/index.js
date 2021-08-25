const express = require('express');
const PORT = 3000;
const sequelize = require('./db/index.js')
const db = require('./db/index.js');
// const client= require('./db/models/client')

var routers = require("./routers/routers.js");
const app = express();
const PORT = 3000;
const sequelize = require("./db/index.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const clientRouter = require("./routers/clientroutes");

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/register", clientRouter);
app.use("/api/reservation", clientRrouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
