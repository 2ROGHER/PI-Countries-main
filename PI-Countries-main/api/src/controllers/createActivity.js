const{ Activity } = require('../db/db.js');
const createActivity = async ( name,hard, duration, season )=>{
    return await Activity.create({ name, hard, duration, season });
};
module.exports = createActivity;