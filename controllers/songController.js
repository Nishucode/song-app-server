const Song = require('../models/Song');
const User = require('../models/User');

exports.getSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.toggleFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const songId = req.params.id;
    const isFavorite = user.favorites.includes(songId);

    if (isFavorite) {
      user.favorites = user.favorites.filter((id) => id.toString() !== songId);
    } else {
      user.favorites.push(songId);
    }
    await user.save();

    res.json({ msg: isFavorite ? 'Removed from favorites' : 'Added to favorites' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('favorites');
    res.json(user.favorites);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};