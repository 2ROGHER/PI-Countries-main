const { Country } = require('../db/db.js');
const { Op } = require('sequelize');
const getCountryByName =  async (name) =>{
    return await Country.findAll({
        where:{
            name:{
                [Op.iLike]:`%${name}%`
            }
        }
    });
}
module.exports = getCountryByName;