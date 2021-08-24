const {DataTypes}= require('sequelize');


const Rating_car =(sequelize)=> sequelize.define('rating_car', {
    // attributess
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    rating: {
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

  module.exports=Rating_car