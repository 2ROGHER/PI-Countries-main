const dataJson = require('../utils/data/countries.json');
const client = require('../utils/connect.js');
const chalk  = require("chalk");
const loadData = async () => {

    dataJson.forEach(async (item) => {
        const register = 'INSERT INTO "countries" (id,name, flag, continent,capital,subregion,area,poblation) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *';
        const values = [item.id, item.name, item.flag, item.continent, item.capital, item.subregion, item.area, item.poblation];
        try {
            const res = await client.query(register, values)
        } catch (error) {
            console.log('No problem: ' + error + " Is not crital error!");
        }
    });
    console.log(chalk.yellowBright('Good look!'))
};
module.exports = loadData;