const express = require('express');
const PORT = 3000;
const sequelize = require('./db/index.js')
const db = require('./db/index.js');
// var cors = require('cors');
 
// app.use(cors());
// const client= require('./db/models/client')

var routers = require("./routers/routers.js");
const app = express();

app.use(express.json());
app.use("/", routers);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });