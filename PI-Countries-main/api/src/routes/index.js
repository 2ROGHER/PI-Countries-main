const { Router } = require('express');
const { route, get } = require('../server/app.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getCountryDetail = require("../controllers/getCountryDetail");
const getCountryByName = require('../controllers/getCountryByName.js');
const createActivity = require('../controllers/createActivity.js');
const getAllActivities = require('../controllers/getAllActivities.js');
const findTest = require('../controllers/findTest.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Route: /countries/:idPais;
router.get("/countries/:idPais", async (req, res) => {
    const { idPais } = req.params;
    try {
        res.status(200).json(await getCountryDetail(idPais));
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// Route:/countries/name?="...";
router.get("/countries/", async (req, res) => {
    const { name } = req.query;
    console.log(name);
    try {
        res.status(200).json(await getCountryByName(name))
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

//Post: activities
router.post("/activities", async (req, res) => {
    const { name, hard, duration, season } = req.body;
    console.log(req.body);
    try {
        res.status(201).json({ message: await createActivity(name, hard, duration, season) });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});
//Get /activities;
router.get("/activities", async (req, res) => {
    try {
        res.status(200).json(await getAllActivities());
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

module.exports = router;
