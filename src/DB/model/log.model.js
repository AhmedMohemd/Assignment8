import mongoose from "mongoose";
const logSchema = new mongoose.Schema({
  book_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});
export const Log = mongoose.model("Log", logSchema);
