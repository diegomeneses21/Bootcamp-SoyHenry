const { createActivity } = require('../controllers/activitiesControllers');
const { Activities } = require('../db');

const getActivitiesHandler = async (req, res) => {
    let results = await Activities.findAll();
    try {
        if (results.length) res.status(201).json(results)
        else res.status(404).send('No existen actividades')
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createActivityHandler = async (req, res) => {
    const { name, difficulty, duration, season, idCountry } = req.body;
    try {
        const newActivity = await createActivity(name, difficulty, duration, season);
        // await Activities.addCountries(idCountry);
        res.status(201).json(newActivity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getActivitiesHandler,
    createActivityHandler
};