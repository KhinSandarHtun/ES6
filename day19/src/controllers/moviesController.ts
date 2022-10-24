import { Response } from "express";
import { getMovieServices, createMovieServices, findMovieServices, updateMovieServices, deleteMovieServices } from "../services/movieService";

export const getMovie = async (_req :any, res:Response) => {
  getMovieServices(_req, res);
};

export const createMovie = async (req :any, res:Response) => {
  createMovieServices(req, res);
};

export const findMovie = async (req :any, res:Response) => {
  findMovieServices(req, res);
};

export const updateMovie = async (req :any, res:Response) => {
  updateMovieServices(req, res);
};

export const deleteMovie = async (req :any, res:Response) => {
  deleteMovieServices(req, res);
};