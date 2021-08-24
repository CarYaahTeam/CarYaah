require('dotenv').config()
const { Sequelize }= require('sequelize');
const mysql = require('mysql2/promise');
// const { createConnection}= require ('mysql2/promise')
// const db = require('./models/client')
const {DataTypes}= require('sequelize');



const database = process.env.DB_NAME;
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host= 'localhost';


module.exports = db = {};


initialize();

async function initialize() {
    // create db if it doesn't already exist
    const connection = await mysql.createConnection({ host, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql'});

    // init models and add them to the exported db object

    // const Project = await sequelize.define('project', {
    //     title: Sequelize.STRING,
    //     description: Sequelize.TEXT
    //   })

    
    db.Admin=require('./models/admin')(sequelize)
    db.Booking=require('./models/booking')(sequelize)
    db.Car=require('./models/car')(sequelize)
    db.Client=require('./models/client')(sequelize)
    db.Conflict=require('./models/Conflict')(sequelize)
    db.Owner=require('./models/owner')(sequelize)
    db.Rating_car=require('./models/rating_car')(sequelize)
    db.Rating_client=require('./models/rating_client')(sequelize)
    
    // sync all models with database
    await sequelize.sync();
}


