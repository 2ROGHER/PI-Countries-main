const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  // ADVICE:
  // storing a password at text plain at database critical, 
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      validation: {
        len: [0, 3],
      }
    },
    key: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        const rawValue = this.getDataValue('name');
        return rawValue ? rawValue.toUpperCase() : null;
      },
      set(){
        return `${this.name}`
      }
    },
    // examples to virtual fields
    name_id:{
      type: DataTypes.VIRTUAL,
      get(){
        return `${this.name} has a unique id -> ${this.id}`;
      },
      set(value){
        throw new Error('Do not to try setting the field \'name_id\'');
      }

    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    continent: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    capital: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      set(value) {
        this.setDataValue("capital:", hash(this.capita + value));
      }
      //when we use console.log(newCountry.capital.getDataValue())=> hashcode
    },
    subregion: {
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

  }, { timestamps: false });
};
