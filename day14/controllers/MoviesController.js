import Movie from "../models/Movie.js";

export const getMovie = async (_req, res) => {
  try {
    const result = await Movie.find();
    res.json({ data: result });
  } catch (err) {
    console.log(err)
  }
};

export const createMovie = async (req, res) => {
  try {
   console.log(req.body)
    const movieData = {
      name: req.body.name,
      year: req.body.year,
      rating: req.body.rating,
    }
    console.log(movieData)
    const category = new Movie(movieData);
    const result = await category.save();
    res.status(201).json({ message: "Created Successfully", data: result })
  } catch (err) {
    console.log(err)
  }
};

export const findMovie = async (req, res) => {
  try {
    const findData = await Movie.findById(req.params.id)
    res.send({ data: findData })
  } catch (err) {
    console.log(err)
  }
};

export const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
    movie.name = req.body.name;
    movie.year = req.body.year;
    movie.rating =req.body.rating;
    const result = await movie.save();
    res.json({ message: "Updated Successfully!", data: result })
  } catch (err) {
    console.log(err)
  }
};

export const deleteMovie = async (req, res) => {
  try {
    await Movie.findById(req.params.id);
    await Movie.findByIdAndRemove(req.params.id);
    res.json({ message: "Movie with id " + req.params.id + " removed." })
  } catch (err) {
    console.log(err)
  }
};