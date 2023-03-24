const { Sequelize } = require('sequelize');
const fs = require('fs');
require('dotenv').config();
const { DB_NAME, DB_HOST, DB_USER, DB_PWD, DB_PORT } = process.env;

const database = new Sequelize(
    `postgres://${DB_USER}:${DB_PWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { logging: false, native: false }
);
/** ------------------ CODE TO CONVERTE THE MODELS TO DABASE TABLE ------------------------ */
// Model(database);
const models = fs.readdirSync('./src/models/');
models.forEach((item) => {
    var Models = require('../models/' + item)
    Models(database);
});

/**------------ REALTIONS HERE ------------------ */
const { Activity, Country, ActivityCountry } = database.models;

Activity.belongsToMany(Country, { through: ActivityCountry });
Country.belongsToMany(Activity, { through: ActivityCountry });

module.exports = { conn: database, ...database.models };