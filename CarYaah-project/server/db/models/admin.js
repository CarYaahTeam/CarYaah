const { DataTypes } = require("sequelize");

const Admin = (sequelize) =>
  sequelize.define(
    "admin",
    {
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
    },
    { timestamps: false }
  );

module.exports = Admin;
