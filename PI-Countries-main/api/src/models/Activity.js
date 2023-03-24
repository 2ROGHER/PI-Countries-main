const { DataTypes, Op, UUIDV4 } = require('sequelize');

const activityModel = (sequelize) =>{
    sequelize.define("activity",{
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        key:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        hard: {
            type: DataTypes.INTEGER,
            validate:{
                max: 5,
                min: 1
            },
            allowNull: false,
        },
        duration: {
            type: DataTypes.TIME,
            allowNull: true,
        },
        season: {
            type: DataTypes.ENUM,
            values: ['verano','invierno','otoño','primavera'],
            allowNull: false,
        }

    })
};
module.exports = activityModel;