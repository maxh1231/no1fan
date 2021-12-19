const User = require('./User');
const Favorites = require('./Favorites');

User.hasMany(Favorites, {
    foreignKey: 'user_id'
})

Favorites.belongsTo(User, {
    foreignKey: 'id'
})

module.exports = { User, Favorites };