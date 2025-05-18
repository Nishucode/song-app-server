const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');
const auth = require('../middleware/auth');

router.get('/', auth, songController.getSongs);
router.post('/favorite/:id', auth, songController.toggleFavorite);
router.get('/favorites', auth, songController.getFavorites);

module.exports = router;