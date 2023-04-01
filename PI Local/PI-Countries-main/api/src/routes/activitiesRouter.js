const { Router } = require('express');

const { getActivitiesHandler, createActivityHandler } = require('../handlers/activitiesHandlers');

const activitiesRouter = Router();

activitiesRouter.get('/', getActivitiesHandler);

activitiesRouter.post('/', createActivityHandler);

module.exports = activitiesRouter;