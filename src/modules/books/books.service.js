import { db } from "../../DB/connection.db.js";
export const createBook = async (data) => {
  const result = await db.collection("books").insertOne(data);
  return {
    acknowledged: true,
    insertedId: result.insertedId,
  };
};
export const createManyBooks = async (books) => {
  const result = await db.collection("books").insertMany(books);
  return {
    acknowledged: true,
    insertedCount: result.insertedCount,
    insertedIds: Object.values(result.insertedIds),
  };
};
export const updateFutureBook = async () => {
  const result = await db
    .collection("books")
    .updateOne({ title: "Future" }, { $set: { year: 2022 } });
  return {
    acknowledged: true,
    matchedCount: result.matchedCount,
    modifiedCount: result.modifiedCount,
  };
};
export const findBookByTitle = async (title) => {
  return await db.collection("books").find({ title }).toArray();
};
export const findBooksBetweenYears = async (from, to) => {
  return await db
    .collection("books")
    .find({ year: { $gte: from, $lte: to } })
    .toArray();
};
export const findBooksByGenre = async (genre) => {
  return await db.collection("books").find({ genres: genre }).toArray();
};
export const findWithSkipLimit = async () => {
  return await db
    .collection("books")
    .find()
    .sort({ year: -1 })
    .skip(2)
    .limit(3)
    .toArray();
};
export const findYearInteger = async () => {
  return await db
    .collection("books")
    .find({ year: { $type: "int" } })
    .toArray();
};
export const excludeGenres = async () => {
  return await db
    .collection("books")
    .find({
      genres: { $nin: ["Horror", "Science Fiction"] },
    })
    .toArray();
};
export const deleteBooksBeforeYear = async (year) => {
  const result = await db
    .collection("books")
    .deleteMany({ year: { $lt: year } });
  return {
    acknowledged: true,
    deletedCount: result.deletedCount,
  };
};
export const aggregate1 = async () => {
  return await db
    .collection("books")
    .aggregate([{ $match: { year: { $gt: 2000 } } }, { $sort: { year: -1 } }])
    .toArray();
};
export const aggregate2 = async () => {
  return await db
    .collection("books")
    .aggregate([
      { $match: { year: { $gt: 2000 } } },
      { $project: { _id: 0, title: 1, author: 1, year: 1 } },
    ])
    .toArray();
};
export const aggregate3 = async () => {
  return await db
    .collection("books")
    .aggregate([{ $unwind: "$genres" }])
    .toArray();
};
export const aggregate4 = async () => {
  return await db
    .collection("books")
    .aggregate([
      {
        $lookup: {
          from: "logs",
          localField: "_id",
          foreignField: "book_id",
          as: "logs",
        },
      },
    ])
    .toArray();
};
