const { Country } = require("../database/db.js");
const { Op } = require('sequelize');
const getCountryDetail = async (idCountry) => {
    return await Country.findAll({
        where: {
            id:{
                [Op.iLike]: idCountry,
            }
        }
    });
};
module.exports = getCountryDetail;