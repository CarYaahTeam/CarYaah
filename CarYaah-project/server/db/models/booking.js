const {DataTypes}= require('sequelize');


const Booking =(sequelize)=> sequelize.define('booking', {
    // attributess
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    book_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    book_end: {
        type: DataTypes.DATE,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      total_price: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      bail: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      id_car: {
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
  module.exports= Booking;