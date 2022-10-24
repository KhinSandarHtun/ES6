import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import multer from 'multer';
import movie_route from "./routes/movie_route";
import user_route from "./routes/user_route"

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array("mg mg"));

mongoose
  .connect(process.env.DATABASE || "")
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    app.use('/movies', movie_route);
    app.use('/users', user_route);
  })
