const express = require('express');
const moviesBLL = require('../BLL/moviesBLL');

const router = express.Router();

// Entry Point 'http://localhost:8000/movies'

// Get all movies
router.route('/').get(async (req, res) => {
try {
    const movies = await moviesBLL.getAllMovies();
    res.json(movies);
} catch (error) {
  res.json(error);
}

});

// Get movie By ID
router.route('/:id').get(async (req, res) => {
  try {
    const { id } = req.params;
  const movie = await moviesBLL.getMovieById(id);
  res.json(movie);
  } catch (error) {
    res.json(error);
  }
  
});

// Get movie By Director
router.route('/byDirector/:director').get(async (req, res) => {
  try {
    const { director } = req.params;
    const movie = await moviesBLL.getMovieByDirector(director);
    res.json(movie);
  } catch (error) {
    res.json(error);
  }

});

// Add a movie
router.route('/').post(async (req, res) => {
  try {
    const obj = req.body;
    console.log(req.body);
    const result = await moviesBLL.addMovie(obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }

});

// Update a movie
router.route('/:id').put(async (req, res) => {
  try {
      const { id } = req.params;
  const obj = req.body;
  const result = await moviesBLL.updateMovie(id, obj);
  res.json(result);
  } catch (error) {
    res.json("The error is: "+error.name);
  }

});

// Delete a movie
router.route('/:id').delete(async (req, res) => {
  try {
      const { id } = req.params;
  const result = await moviesBLL.deleteMovie(id);
  res.json(result);
  } catch (error) {
    res.json("The error is: "+error.name);
  }

});

module.exports = router;