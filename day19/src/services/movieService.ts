import Movie from "../models/movie";
import {Response} from "express";

export const getMovieServices = async (_req :any, res:Response) => {
  try {
    const result = await Movie.find().populate("created_user_id");
    res.json({ data: result });
  } catch (err) {
    console.log(err)
  }
};

export const createMovieServices = async (req :any, res:Response) => {
  try {
   console.log(req.body)
    const movieData = {
      name: req.body.name,
      year: req.body.year,
      rating: req.body.rating,
      created_user_id : req.body.created_user_id,
    }
    console.log(movieData)
    const category = new Movie(movieData);
    const result = await category.save();
    res.status(201).json({ message: "Created Successfully", data: result })
  } catch (err) {
    console.log(err)
  }
};

export const findMovieServices = async (req :any, res:Response) => {
  try {
    const findData = await Movie.findById(req.params.id).populate("created_user_id")
    res.send({ data: findData })
  } catch (err) {
    console.log(err)
  }
};

export const updateMovieServices = async (req :any, res:Response) => {
  try {
    const movie:any = await Movie.findById(req.params.id)
    movie.name = req.body.name;
    movie.year = req.body.year;
    movie.rating =req.body.rating;
    movie.created_user_id = req.body.created_user_id;
    const result = await movie.save();
    res.json({ message: "Updated Successfully!", data: result })
  } catch (err) {
    console.log(err)
  }
};

export const deleteMovieServices = async (req :any, res:Response) => {
  try {
    await Movie.findById(req.params.id);
    await Movie.findByIdAndRemove(req.params.id);
    res.json({ message: "Movie with id " + req.params.id + " removed." })
  } catch (err) {
    console.log(err)
  }
};