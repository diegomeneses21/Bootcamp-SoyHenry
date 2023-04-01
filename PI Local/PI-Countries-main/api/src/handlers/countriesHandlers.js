const axios = require('axios');
const { getAllCountriesApi,
    searchCountryByNameApi,
    searchCountryByIdApi,
    getAllCountriesBDD,
    searchCountryByNameBDD,
    searchCountryByIdBDD,
    createDatabase } = require('../controllers/countriesControllers')

// const getCountriesHandler = async (req, res) => {
//     const { name } = req.query;
//     const results = (name) ? await searchCountryByNameApi(name) : await getAllCountriesApi();
//     res.status(200).json(results);
// };

// const getCountryHandler = async (req, res) => {
//     const { idCountry } = req.params;
//     const results = await searchCountryByIdApi(idCountry);
//     res.status(200).json(results);
// };

// const createDatabaseHandler = async (req, res) => {
//     await createDatabase();
//     res.status(200).send('LA BASE DE DATOS A SIDO CREADA, POR FAVOR NO USAR MAS ESTA RUTA');
// };

const getCountriesHandler = async (req, res) => {
    const { name } = req.query;
    let results = (name) ? await searchCountryByNameBDD(name) : await getAllCountriesBDD();
    res.status(200).json(results);
};

const getCountryHandler = async (req, res) => {
    const { idCountry } = req.params;
    const results = await searchCountryByIdBDD(idCountry);
    res.status(200).json(results);
};

module.exports = {
    createDatabaseHandler,
    getCountriesHandler,
    getCountryHandler
};