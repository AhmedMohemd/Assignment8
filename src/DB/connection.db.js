import mongoose from "mongoose";
import { MONGO_URI } from "../../config/config.service.js";
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
