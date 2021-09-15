const { DataTypes } = require("sequelize");

const Client = (sequelize) =>
  sequelize.define("client", {
    // attributess
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    drvlicense: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    }
  });

module.exports = Client;
