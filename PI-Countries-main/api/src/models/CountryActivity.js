const { DataTypes, UUIDV4 } = require('sequelize');
const Country = require('./Country');
const Activity = require("./Activity");
module.exports = (sequelize) => {
    sequelize.define("CountryActivity", {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        /**---------------------- REMEMBER TYPE THE CORRECT FIELD NAME FOR THIS ----------------------- */
        countryId:{
            type: DataTypes.STRING,
            references:{
                model: Country,
                key: "id",
            }
        },
        activityId:{
            type: DataTypes.UUIDV4,
            references:{
                model: Activity,
                key: "id"
            }
        }
    })
};