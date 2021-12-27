const router = require('express').Router();
const { AlbumFavorites, ArtistFavorites } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all saved concerts
router.get('/', (req, res) => {});
