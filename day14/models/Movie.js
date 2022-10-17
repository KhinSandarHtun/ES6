import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
}, {
  timestamps: true
}
)
export default model("movie", movieSchema)