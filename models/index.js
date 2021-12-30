const User = require('./User');
const ArtistFavorites = require('./ArtistFavorites');
const AlbumFavorites = require('./AlbumFavorites');
const SavedConcerts = require('./SavedConcerts');

User.hasMany(ArtistFavorites, {
    foreignKey: 'user_id',
});

ArtistFavorites.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(AlbumFavorites, {
    foreignKey: 'user_id',
});

AlbumFavorites.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(SavedConcerts, {
    foreignKey: 'user_id',
});

SavedConcerts.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, ArtistFavorites, AlbumFavorites, SavedConcerts };
