const express = require("express");
const app = express();
const db = require("./db/index.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const clientRouter = require("./routers/clientroutes");
const ownerRouter = require("./routers/ownerrouters");
const CarRouter = require("./routers/carroutes");
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/client", clientRouter);
app.use("/owner", ownerRouter);

app.use("/api/reservation", clientRouter);
app.use("/cars", CarRouter);

app.use("/owner", ownerRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});