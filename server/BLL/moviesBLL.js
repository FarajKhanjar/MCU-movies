const Movie = require('../models/movieModel');

// GET - Get All - Read
const getAllMovies = () => {
  return Movie.find({});
};

// GET - Get By Id - read
const getMovieById = (id) => {
  return Movie.findById({ _id: id });
};

// GET - Get By Director - read & filter
const getMovieByDirector = (director) => {
  return Movie.find({ director: director });
};

// POST - Create
const addMovie = async (obj) => {
  const currMovie = new Movie(obj);
  await currMovie.save();
  return 'Created!';
};

// PUT - Update
const updateMovie = async (id, obj) => {
  await Movie.findByIdAndUpdate(id, obj);
  return 'Updated!';
};

// DELETE - Delete
const deleteMovie = async (id) => {
  await Movie.findByIdAndDelete(id);
  return 'Deleted!';
};

module.exports = {
  getAllMovies,
  getMovieById,
  getMovieByDirector,
  addMovie,
  updateMovie,
  deleteMovie,
};