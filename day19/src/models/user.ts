import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gmail: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
}, {
  timestamps: true
}
)
export default model("user", userSchema)