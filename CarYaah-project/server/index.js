const express = require("express");
const PORT = 3000;

const app = express();

app.use(express.json());

app.post("/owner", (req, res) => {
  console.log("done");
  res.send("success");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
