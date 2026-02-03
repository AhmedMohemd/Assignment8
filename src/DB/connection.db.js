import { MongoClient } from "mongodb";
import { MONGO_URI } from "../../config/config.service.js";
export let db;
export const connectDB = async () => {
  try {
    const client = new MongoClient(MONGO_URI);
    await client.connect();
    db = client.db();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Unable to connect to database", error);
  }
};
