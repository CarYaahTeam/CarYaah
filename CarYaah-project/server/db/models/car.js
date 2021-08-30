const { DataTypes } = require("sequelize");

const Car = (sequelize) =>
  sequelize.define("car", {
    // attributess
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    AC: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    GPS: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    AUTOMATIC: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    start_date_av: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date_av: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    bail: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "available",
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    registration_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

module.exports = Car;
