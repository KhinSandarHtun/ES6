import {  Response } from "express";
import Movie from "../models/Movie";

export const getMovie = async (_request :any, response:Response) => {
  try {
    const result = await Movie.find();
    response.json({ data: result });
  } catch (err) {
    console.log(err)
  }
};

export const createMovie = async (request :any, response:Response) => {
  try {
   console.log(request.body)
    const movieData = {
      name: request.body.name,
      year: request.body.year,
      rating: request.body.rating,
    }
    console.log(movieData)
    const category = new Movie(movieData);
    const result = await category.save();
    response.status(201).json({ message: "Created Successfully", data: result })
  } catch (err) {
    console.log(err)
  }
};

export const findMovie = async (request :any, response:Response) => {
  try {
    const findData = await Movie.findById(request.params.id)
    response.send({ data: findData })
  } catch (err) {
    console.log(err)
  }
};

export const updateMovie = async (request :any, response:Response) => {
  try {
    const movie:any = await Movie.findById(request.params.id)
    movie.name = request.body.name;
    movie.year = request.body.year;
    movie.rating =request.body.rating;
    const result = await movie.save();
    response.json({ message: "Updated Successfully!", data: result })
  } catch (err) {
    console.log(err)
  }
};

export const deleteMovie = async (request :any, response:Response) => {
  try {
    await Movie.findById(request.params.id);
    await Movie.findByIdAndRemove(request.params.id);
    response.json({ message: "Movie with id " + request.params.id + " removed." })
  } catch (err) {
    console.log(err)
  }
};