const express = require("express");
const db = require("./db/index.js");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const clientRouter = require("./routers/clientroutes");
const ownerRouter = require("./routers/ownerroutes");
const CarRouter = require("./routers/carroutes");

const PORT = 3000;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/register/client", clientRouter);
app.use("/login/client", clientRouter);
app.use("/api/reservation", clientRouter);
app.use("/cars", CarRouter);
app.use("/owner", ownerRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
