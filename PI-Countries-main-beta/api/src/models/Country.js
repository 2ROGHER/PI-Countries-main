const { DataTypes } = require('sequelize');
module.exports = (database)=>{
    database.define("Country",{
        id:{
            type: DataTypes.STRING(3),//3 chars
            allowNull: false,
            primaryKey: true,
            require: true,
            validate:{
                len:[0,3]
            }
            
        },
        key:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        name:{
            type:DataTypes.TEXT,
            allowNull:false,
            require: true,
        },
        flag:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        continent: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        capital:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        subregion: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        area: {
            type: DataTypes.INTEGER, 
            allowNull: false,
        },
        poblation:{
            type:DataTypes.INTEGER,
            allowNull: false, 
        }
    },{ timestamps: false })
}