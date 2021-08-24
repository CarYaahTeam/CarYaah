const {DataTypes}= require('sequelize');
const db = require('../index.js')

module.exports = db.define('rating_car', {
    // attributess
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    rating: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
    id_car: {
        type: DataTypes.INTEGER,
        required : true,
        allowNull: false
      },
      id_client: {
        type: DataTypes.INTEGER,
        required : true,
        allowNull: false
      }
  });