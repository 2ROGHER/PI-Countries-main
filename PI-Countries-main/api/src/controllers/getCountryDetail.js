const { Country } = require("../db/db.js");

const getCountryDetail = (idCounty) =>{
    return Country.findByPk(idCounty);
};
module.exports = getCountryDetail;