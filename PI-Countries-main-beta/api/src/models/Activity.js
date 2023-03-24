const { DataTypes } = require('sequelize');
module.exports = (database)=>{
    database.define("Activity",{
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,

        },
        key:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        hard:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                min:1,
                max: 5,
            }
        },
        duration:{
            type:DataTypes.TIME,
            allowNull: false,
            validate:{
                isTime: true
            }
        },
        season:{
            type: DataTypes.ENUM('verano','otoño', 'invierno','primavera'),
            allowNull: false, 
        }

    })
}