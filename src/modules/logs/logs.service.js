import { db } from "../../DB/connection.db.js";
import { ObjectId } from "mongodb";
export const createLog = async (data) => {
  const logData = {
    ...data,
    book_id: new ObjectId(data.book_id),
    date: new Date(),
  };
  const result = await db.collection("logs").insertOne(logData);
  return {
    acknowledged: true,
    insertedId: result.insertedId,
  };
};
