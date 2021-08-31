const {DataTypes}= require('sequelize');


const Rating_client =(sequelize)=> sequelize.define('rating_client', {
    // attributess
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    rating: {
        type: DataTypes.DECIMAL,
        allowNull: false
      }

  });

  module.exports=Rating_client