const { DataTypes } = require("sequelize");

const Client = (sequelize) =>
  sequelize.define("client", {
    // attributess
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
   
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: true,
     
    },
    favorit:{
      
    }
  });

module.exports = Client;
