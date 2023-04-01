const axios = require('axios');
const { Country } = require('../db');

const cleanArray = (arr) =>
    arr.map(e => {
        return {
            id: e.cca3,
            name: e.name.common,
            flags: e.flags[1],
            continents: e.continents[0],
            capital: e.capital,
            subregion: e.subregion,
            area: e.area[1],
            population: e.population,
        }
    })

const getAllCountriesApi = async () => {
    const apiCountriesRaw = (
        await axios.get("https://restcountries.com/v3/all")
    ).data;
    const apiCountries = cleanArray(apiCountriesRaw);
    return apiCountries;
}

const searchCountryByNameApi = async (name) => {
    const apiCountriesRaw = (
        await axios.get("https://restcountries.com/v3/all")
    ).data;
    const apiCountries = cleanArray(apiCountriesRaw);
    const filteredApi = apiCountries.filter((country) => country.name === name);
    return filteredApi;
};

const searchCountryByIdApi = async (idCountry) => {
    const apiCountriesRaw = (
        await axios.get("https://restcountries.com/v3/all")
    ).data;
    const apiCountries = cleanArray(apiCountriesRaw);
    const filteredApi = apiCountries.filter((country) => country.id === idCountry);
    return filteredApi;
}

const createDatabase = async () => {
    let countries = await getAllCountriesApi(); // []
    countries.map(e =>
        Country.bulkCreate([
            {
                id: e.id,
                name: e.name,
                flags: e.flags,
                continents: e.continents,
                capital: e.capital,
                subregion: e.subregion,
                area: e.area,
                population: e.population
            },
        ])
    )
}

const getAllCountriesBDD = async () => {
    return Country.findAll();
}

const searchCountryByNameBDD = async (name) => {
    return Country.findAll({ where: { name: name } });
};

const searchCountryByIdBDD = (idCountry) => {
    return Country.findAll({ where: { id: idCountry } });
};

module.exports = {
    createDatabase,
    getAllCountriesApi,
    getAllCountriesBDD,
    searchCountryByNameApi,
    searchCountryByNameBDD,
    searchCountryByIdBDD,
    searchCountryByIdApi
};