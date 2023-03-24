const { DataTypes } = require("sequelize");
module.exports = (database) =>{
    database.define('ActivityCountry',{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
        
    },{ 
        timestamps: false
    })
}