require('dotenv').config()
const { Sequelize }= require('sequelize');
const mysql = require('mysql2/promise');
// const { createConnection}= require ('mysql2/promise')
// const db = require('./models/client')
const {DataTypes}= require('sequelize');



const database = "CarYaah";
const user = "root";
const password = "root";
const host= 'localhost';


const db = {};


initialize();

async function initialize() {
    // create db if it doesn't already exist
    const connection = await mysql.createConnection({ host, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql'});

    // init models and add them to the exported db object
    
    db.Admin=require('./models/admin')(sequelize)
    db.Booking=require('./models/booking')(sequelize)
    db.Car=require('./models/car')(sequelize)
    db.Client=require('./models/client')(sequelize)
    db.Conflict=require('./models/conflict')(sequelize)
    db.Owner=require('./models/owner')(sequelize)
    db.Rating_car=require('./models/rating_car')(sequelize)
    db.Rating_client=require('./models/rating_client')(sequelize)
    
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
    // sync all models with database
    await sequelize.sync();
}


module.exports =db