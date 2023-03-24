const dataJson = require('../utils/databeta.json');
const client = require('../utils/connect.js');

const loadData = () => {

    dataJson.forEach(async (item) => {
        const register = 'INSERT INTO "Countries" (id,name, flag, continent,capital,subregion,area,poblation) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *';
        const values = [item.id, item.name, item.flag, item.continent, item.capital, item.subregion, item.area, item.poblation];
        try {
            const res = await client.query(register, values)
            console.log(res.rows[0]);
        } catch (error) {
            console.log(error.stack);
        }
    });
};
module.exports = loadData;