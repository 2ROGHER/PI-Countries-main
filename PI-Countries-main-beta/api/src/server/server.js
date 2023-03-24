const express = require('express');
const app = express();
const morgan = require('morgan');

/**-----------MIDDLE WARES ------------------- */

app.use(morgan('dev'));
app.use(express.json());

/**-----------------  ROUTES --------------------- */
app.get('/',(req, res)=>{
    res.status(200).json({ message: 'At home'});
})
;
module.exports = app;
