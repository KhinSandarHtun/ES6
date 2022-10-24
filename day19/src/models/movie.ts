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
  created_user_id: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
}, {
  timestamps: true
}
)
export default model("movie", movieSchema)