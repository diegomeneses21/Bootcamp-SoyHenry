const { Router } = require('express');

const { createDatabaseHandler, getCountriesHandler, getCountryHandler } = require('../handlers/countriesHandlers');

const countriesRouter = Router();

// countriesRouter.get('/create', createDatabaseHandler );

countriesRouter.get('/', getCountriesHandler);

countriesRouter.get('/:idCountry', getCountryHandler);

module.exports = countriesRouter;