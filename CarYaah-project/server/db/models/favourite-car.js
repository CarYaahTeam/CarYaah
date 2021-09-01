const { DataTypes } = require("sequelize");
const Favourite = (sequelize) =>
  sequelize.define("favourite", {
  
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      }

  });
module.exports = Favourite;