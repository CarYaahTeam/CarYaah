const { DataTypes } = require("sequelize");

const Conflict = (sequelize) =>
  sequelize.define("conflict", {
    // attributess
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    conflict_report: {
        type: DataTypes.STRING,
        allowNull: false
      },
      conflict_status: {
        type: DataTypes.STRING,
        allowNull: false
      }
  });

module.exports = Conflict;
