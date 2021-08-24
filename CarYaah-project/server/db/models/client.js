const {DataTypes}= require('sequelize');
const db = require('../index.js')

module.exports = db.define('client', {
    // attributess
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: true
      }
  });

  



