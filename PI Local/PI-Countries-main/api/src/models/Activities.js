const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activities', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5"),
            defaultValue: null,
        },
        duration: {
            type: DataTypes.INTEGER,
        },
        season: {
            type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
            defaultValue: null,
        }
    },
        {
            timestamps: false
        })
};