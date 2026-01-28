import { Book } from "../../DB/model/book.model.js";
export const createBook = async (data) => {
  const book = await Book.create(data);
  return {
    acknowledged: true,
    insertedId: book._id,
  };
};
export const createManyBooks = async (books) => {
  const result = await Book.insertMany(books);
  return {
    acknowledged: true,
    insertedCount: result.length,
    insertedIds: result.map((b) => b._id),
  };
};
export const updateFutureBook = async () => {
  const result = await Book.updateOne(
    { title: "Future" },
    { $set: { year: 2022 } },
  );
  return {
    acknowledged: true,
    matchedCount: result.matchedCount,
    modifiedCount: result.modifiedCount,
  };
};
export const findBookByTitle = async (title) => {
  return await Book.find({ title });
};
export const findBooksBetweenYears = async (from, to) => {
  return await Book.find({ year: { $gte: from, $lte: to } });
};
export const findBooksByGenre = async (genre) => {
  return await Book.find({ genres: genre });
};
export const findWithSkipLimit = async () => {
  return await Book.find().sort({ year: -1 }).skip(2).limit(3);
};
export const findYearInteger = async () => {
  return await Book.find({ year: { $type: "int" } });
};
export const excludeGenres = async () => {
  return await Book.find({
    genres: { $nin: ["Horror", "Science Fiction"] },
  });
};
export const deleteBooksBeforeYear = async (year) => {
  const result = await Book.deleteMany({ year: { $lt: year } });
  return {
    acknowledged: true,
    deletedCount: result.deletedCount,
  };
};
export const aggregate1 = async () => {
  return await Book.aggregate([
    { $match: { year: { $gt: 2000 } } },
    { $sort: { year: -1 } },
  ]);
};
export const aggregate2 = async () => {
  return await Book.aggregate([
    { $match: { year: { $gt: 2000 } } },
    { $project: { _id: 0, title: 1, author: 1, year: 1 } },
  ]);
};
export const aggregate3 = async () => {
  return await Book.aggregate([{ $unwind: "$genres" }]);
};
export const aggregate4 = async () => {
  return await Book.aggregate([
    {
      $lookup: {
        from: "logs",
        localField: "_id",
        foreignField: "book_id",
        as: "logs",
      },
    },
  ]);
};
