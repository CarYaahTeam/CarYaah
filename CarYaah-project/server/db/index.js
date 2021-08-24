require('dotenv').config()
const {Sequelize}= require('sequelize');
// const mysql = require('mysql2/promise');
// const { createConnection}= require ('mysql2/promise')
// const db = require('./models/client')

const database = process.env.DB_NAME;
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host= 'localhost';


// const sequelize = new Sequelize(database, user, password, { dialect: 'mysql',host: host });

// module.exports=sequelize

// db.Client = require('./models/client')(sequelize);
module.exports = db = {};


initialize();

async function initialize() {
    // create db if it doesn't already exist
    const connection = await mysql.createConnection({ host, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init models and add them to the exported db object
    db.Client = require('../db/models/client');
    const jane = await Client.create({ name: "Jane" });
    
    // sync all models with database
    await sequelize.sync();
}


