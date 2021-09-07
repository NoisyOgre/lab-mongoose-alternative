const router = require("express").Router();
const Movie = require("../models/movie.model");
const Celebrity = require("../models/celebrity.model")


router.get("/movie", async (req, res) => {
    const movie = await Movie.find();

    console.log(movie);
    res.render("movies/movie-list", {movie})
});

router.get("/movie/:movieId", async (req, res) => {
    const movie = await Movie.findById(req.params.movieId).populate("cast")
    res.render("movies/movie-details", movie)
});

//http://localhost:3000/create-author
router.get("/create-movie",  async (req, res) => {
    const cast = await Celebrity.find()
    res.render("movies/movie-create",  {cast} );
});


router.post("/create-movie", async (req, res) => {
    const { title, genre, plot, cast  } = req.body;
    await Movie.create({title, genre, plot, cast});
    res.redirect("/movie")
});

router.get("/movie/:movieId/edit", async (req, res) => {
    const movie = await Movie.findById(req.params.movieId).populate("cast"); 
    const cast = await Celebrity.find();
    res.render("movies/movie-edit", {movie, cast});
});

router.post("/movie/:movieId/edit", async (req, res) => {
    const { title, genre, plot, cast } = req.body;
     await Movie.findByIdAndUpdate(req.params.movieId, {
        title,
        genre,
        plot,
        cast,
    });
    res.redirect(`/movie/${req.params.movieId}`);
});



router.post("/movie/:movieId/delete", async (req, res) => {
     await Movie.findByIdAndRemove(req.params.movieId);
    res.redirect("/movie/");
});

module.exports = router;


