const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SavedConcerts extends Model {}

SavedConcerts.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        },
    },
});
