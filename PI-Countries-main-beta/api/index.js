const app = require('./src/server/server.js');
const chalk = require('chalk');
const { conn, Country } = require('./src/db/db.js');
const saveDataInDB = require("./src/scripts/utils/saveDataInDB.js");
const dataJson = require('./src/scripts/utils/datafinalbeta.json');

//falta la sicronizacion con sequlize
conn
    .sync({ force: true })
    .then(() => {
        app.listen(3001, () => {
            console.log(chalk.cyan("Listen at port: ") + chalk.magenta('3001...'));
        })
    })
    // .then(() => saveDataInDB(dataJson, Country))
    .then(() => {
        console.log(chalk.blue("Your database is syncronised!"));
    })
    .catch((error) => {
        console.log(error);
    });