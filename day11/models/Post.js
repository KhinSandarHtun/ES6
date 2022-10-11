import { Schema, model } from "mongoose";

const postSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
}, {
  timestamps: true
}
)
export default model("post", postSchema)