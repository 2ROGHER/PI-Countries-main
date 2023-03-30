const { Country } = require('../database/db.js');
const findTest = async () => {
    const res = await Country.findAll({
        where:{
            key: 1,
        }
    });
    console.log(res);
    if(!res) throw new Error("Error");
    else return res;
};
module.exports = findTest;