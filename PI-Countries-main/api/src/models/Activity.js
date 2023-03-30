const { DataTypes } = require('sequelize');

const activityModel = (sequelize) => {
    sequelize.define("activity", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        key: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            get() {
                const value = this.getDataValue('name');
                value ? value.toUpperCase() : null;
            }
        },
        hard: {
            type: DataTypes.INTEGER,
            validate: {
                max: 5,
                min: 1
            },
            allowNull: false,
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        season: {
            type: DataTypes.ENUM,
            values: ['verano', 'invierno', 'otoño', 'primavera'],
            allowNull: false,
        }
    });
};
module.exports = activityModel;