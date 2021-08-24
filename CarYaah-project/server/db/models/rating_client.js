const {DataTypes}= require('sequelize');
const db = require('../index.js')

module.exports = db.define('rating_client', {
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
    id_owner: {
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