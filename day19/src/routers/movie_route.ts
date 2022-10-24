import express from 'express';
import { createMovie, deleteMovie, findMovie, getMovie, updateMovie } from "../controllers/moviesController";

const router = express.Router();

router
  .route('/')
  .get(getMovie)
  .post(createMovie)

 router
  .route('/:id')
  .get(findMovie)
  .put(updateMovie)
  .delete(deleteMovie)

export default router;