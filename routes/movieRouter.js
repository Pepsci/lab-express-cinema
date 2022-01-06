const router = require("express").Router();
const Movies = require("../models/movies.model");
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  Movies.find()
    .then((dbResponse) => {
      //   console.log("database response", dbResponse);
      res.render("movie", {
        movies: dbResponse,
        css: ["movies"],
      });
    })
    .catch((e) => console.error(e));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Movies.findById(id)
    .then((movie) => {
      //   console.log(movie);
      //   res.send("To be continued...");
      res.render("oneMovie.hbs", {
        movie: movie,
        css: ["oneMovie"],
      });
    })
    .catch((e) => console.error(e));
});

module.exports = router;
