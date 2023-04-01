const { Activities } = require('../db');

const createActivity = async (name, difficulty, duration, season) => {
    const newActivity = await Activities.create({ name, difficulty, duration, season });
    return newActivity;
}

module.exports = {
    createActivity
}