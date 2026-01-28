import mongoose from "mongoose";
export const createBooksCollection = async () => {
  const db = mongoose.connection.db;
  await db.createCollection("books", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["title"],
        properties: {
          title: { bsonType: "string" },
        },
      },
    },
  });
  return { message: "books collection created" };
};
export const createAuthorsCollection = async () => {
  const result = await mongoose.connection.db
    .collection("authors")
    .insertOne({ name: "Author1" });
  return result;
};
export const createLogsCollection = async () => {
  const db = mongoose.connection.db;
  await db.createCollection("logs", {
    capped: true,
    size: 1024 * 1024,
  });
  return { message: "logs capped collection created" };
};
export const createBooksIndex = async () => {
  const indexName = await mongoose.connection.db
    .collection("books")
    .createIndex({ title: 1 });
  return { indexName };
};
