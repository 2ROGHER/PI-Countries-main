const { Activity } = require('../db/db.js');

const getAllActivities = async () =>{
    return await Activity.findAll();
};
module.exports = getAllActivities;