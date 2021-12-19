const User = require('./User');
const ArtistFavorites = require('./ArtistFavorites');
const AlbumFavorites = require('./AlbumFavorites');

User.hasMany(ArtistFavorites, {
    foreignKey: 'user_id'
})

ArtistFavorites.belongsTo(User, {
    foreignKey: 'id'
})

User.hasMany(AlbumFavorites, {
    foreignKey: 'user_id'
})

AlbumFavorites.belongsTo(User, {
    foreignKey: 'id'
})

module.exports = { User, ArtistFavorites, AlbumFavorites };