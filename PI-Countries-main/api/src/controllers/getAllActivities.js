const { Activity } = require('../database/db.js');

const getAllActivities = async () =>{
    return await Activity.findAll();
};
module.exports = getAllActivities;