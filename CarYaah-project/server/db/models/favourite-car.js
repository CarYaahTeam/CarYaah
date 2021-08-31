const { DataTypes } = require("sequelize");

const Favourite = (sequelize) =>
  sequelize.define("favourite", {
    // attributess
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }
  });

module.exports = Favourite;