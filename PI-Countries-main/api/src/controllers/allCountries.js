const { Country } = require('../db/db.js');
// return a query
const allCountries = () =>{
    return Country.findAll();
};
module.exports = allCountries;