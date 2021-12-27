const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SavedConcerts extends Model {}

SavedConcerts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        concert_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        artist_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        venue_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'savedconcerts',
    }
);

module.exports = SavedConcerts;
