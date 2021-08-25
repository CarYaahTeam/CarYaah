<<<<<<< HEAD
require('dotenv').config()
const { Sequelize }= require('sequelize');
const mysql = require('mysql2/promise');


const database = "CarYaah";
const user = "root";
const password = "root";
const host= 'localhost';

=======
require("dotenv").config();
const { Sequelize } = require("sequelize");
const mysql = require("mysql2/promise");

const database = process.env.DB_NAME;
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = "localhost";
>>>>>>> 6b3fc1dc25259c7a2505d35daff02795e93c0aeb

const db = {};

// initialize();

async function initialize() {
<<<<<<< HEAD
    // create db if it doesn't already exist
    const connection = await mysql.createConnection({ host, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql'});

<<<<<<< HEAD
    // creating models
=======
    // init models and add them to the exported db object
    
>>>>>>> 23269bb770b2460a6d550c9a879813876a14928f
    db.Admin=require('./models/admin')(sequelize)
    db.Booking=require('./models/booking')(sequelize)
    db.Car=require('./models/car')(sequelize)
    db.Client=require('./models/client')(sequelize)
    db.Conflict=require('./models/conflict')(sequelize)
    db.Owner=require('./models/owner')(sequelize)
    db.Rating_car=require('./models/rating_car')(sequelize)
    db.Rating_client=require('./models/rating_client')(sequelize)
<<<<<<< HEAD

    //setting relations
=======
    
>>>>>>> 23269bb770b2460a6d550c9a879813876a14928f
    db.Owner.hasMany(db.Car)
    db.Car.belongsTo(db.Owner)
    db.Client.hasMany(db.Booking)
    db.Car.hasMany(db.Booking)
    db.Rating_client.belongsTo(db.Client)
    db.Rating_client.belongsTo(db.Owner)
    db.Rating_car.belongsTo(db.Client)
    db.Rating_car.belongsTo(db.Car)
    db.Conflict.belongsTo(db.Client)
    db.Conflict.belongsTo(db.Car)
<<<<<<< HEAD

=======
>>>>>>> 23269bb770b2460a6d550c9a879813876a14928f
    // sync all models with database
    await sequelize.sync();
}
// createReservation: function(params,callbacks){
//     var queryStr= "INSERT into car(start_date_av,end_date_av) VALUES(?,?)";
//     db.query(queryStr,params, function(err,results){
//         callbacks(results)
//     });
// }

module.exports =db
=======
  // create db if it doesn't already exist
  const connection = await mysql.createConnection({ host, user, password });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  // connect to db
  const sequelize = new Sequelize(database, user, password, {
    dialect: "mysql",
  });

  db.Admin = require("./models/admin")(sequelize);
  db.Booking = require("./models/booking")(sequelize);
  db.Car = require("./models/car")(sequelize);
  db.Client = require("./models/client")(sequelize);
  db.Conflict = require("./models/conflict")(sequelize);
  db.Owner = require("./models/owner")(sequelize);
  db.Rating_car = require("./models/rating_car")(sequelize);
  db.Rating_client = require("./models/rating_client")(sequelize);
  db.Owner.hasMany(db.Car);
  db.Car.belongsTo(db.Owner);
  db.Client.hasMany(db.Booking);
  db.Car.hasMany(db.Booking);
  db.Rating_client.belongsTo(db.Client);
  db.Rating_client.belongsTo(db.Owner);
  db.Rating_car.belongsTo(db.Client);
  db.Rating_car.belongsTo(db.Car);
  db.Conflict.belongsTo(db.Client);
  db.Conflict.belongsTo(db.Car);
  // sync all models with database
  await sequelize.sync();
}
>>>>>>> 6b3fc1dc25259c7a2505d35daff02795e93c0aeb
