const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AlbumFavorites extends Model { }

AlbumFavorites.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        album_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        album_name: {
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
        modelName: 'albumfavorites'
    }
);

module.exports = AlbumFavorites;