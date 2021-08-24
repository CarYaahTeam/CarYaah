const express = require('express');
const PORT = 3000;
const sequelize = require('./db/index.js')


const app = express();

app.use(express.json());





sequelize.authenticate()
.then(()=>console.log('Connection has been established successfully.'))
.catch((err)=>console.log('Unable to connect to the database:'+ err))

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });