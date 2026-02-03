import { db } from "../../DB/connection.db.js";
export const createBooksCollection = async () => {
  try {
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
  } catch (error) {
    if (error.code === 48) {
      return { message: "books collection already exists" };
    }
    throw error;
  }
};
export const createAuthorsCollection = async () => {
  const result = await db.collection("authors").insertOne({ name: "Author1" });
  return result;
};
export const createLogsCollection = async () => {
  const exists = await db.listCollections({ name: "logs" }).toArray();
  if (exists.length) {
    return {
      acknowledged: true,
      message: "logs collection already exists",
    };
  }
  await db.createCollection("logs", {
    capped: true,
    size: 1024 * 1024,
  });
  return {
    acknowledged: true,
    message: "logs capped collection created successfully",
  };
};
export const createBooksIndex = async () => {
  const indexName = await db.collection("books").createIndex({ title: 1 });
  return { indexName };
};