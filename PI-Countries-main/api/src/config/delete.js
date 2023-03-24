const { Op } = require('sequelize');
const { Activity } = require('../db/db.js');
const deleteDb = async () => {
    return await Activity.destroy({
        where:{
            hard:1
        }
    });
};
module.exports = deleteDb;