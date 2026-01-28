import mongoose from "mongoose";
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true, 
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
    genres: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true },
);
export const Book = mongoose.model("Book", bookSchema);
