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
    },
    GPS: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    AUTOMATIC: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
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
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    registration_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

module.exports = Car;
