const { model, Schema } = require("mongoose");

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

const Movie = model("Movies", movieSchema);

module.exports = Movie;
