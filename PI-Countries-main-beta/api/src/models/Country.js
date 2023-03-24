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
            require: true,
            unique: true
        },
        name:{
            type:DataTypes.TEXT,
            allowNull:false,
            unique:true,
            require: true,
        },
        flag:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        continent: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            unique: true,
            require: true,
        },
        capital:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            unique: true,
            require: true,
        },
        subregion: {
            type: DataTypes.STRING(255),
            allowNull: false,
            require: true,
        },
        area: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            require: true,
        },
        poblation:{
            type:DataTypes.INTEGER,
            allowNull: false, 
            require: true,
        }
    },{ timestamps: false })
}