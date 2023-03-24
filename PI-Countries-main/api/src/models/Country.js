const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    key:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag:{
      type: DataTypes.STRING,
      allowNull: false,

    },
    continent: {
      type: DataTypes.ARRAY(DataTypes.STRING), 
      allowNull: false,
      unique: true
    },
    capital: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      unique: true
    },
    subregion:{
      type: DataTypes.STRING,
      allowNull: false
    },
    area: {
      type: DataTypes.INTEGER,
    },
    poblation: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }

  });
};
