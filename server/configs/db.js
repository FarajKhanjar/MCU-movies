const mongoose = require('mongoose');

const connectDB = () => {
  mongoose
    .connect('mongodb://127.0.0.1/moviesDB')
    .then(() => console.log('Connected to moviesDB!'))
    .catch((error) => console.log(error));
};

module.exports = connectDB;