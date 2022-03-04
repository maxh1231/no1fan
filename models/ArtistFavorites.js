const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ArtistFavorites extends Model { }

ArtistFavorites.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        artist_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        artist_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'artistfavorites'
    }
);

module.exports = ArtistFavorites;