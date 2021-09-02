const { DataTypes } = require("sequelize");

const Owner = (sequelize) =>
  sequelize.define("owner", {
    // attributess
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: false,
    },
  });

module.exports = Owner;
