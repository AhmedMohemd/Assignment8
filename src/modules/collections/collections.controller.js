import { Router } from "express";
import * as service from "./collections.service.js";
const router = Router();
router.post("/books", async (req, res, next) => {
  try {
    const result = await service.createBooksCollection();
    return res.status(201).json({ acknowledged: true, ...result });
  } catch (error) {
    next(error);
  }
});
router.post("/authors", async (req, res, next) => {
  try {
    const result = await service.createAuthorsCollection();
    return res.status(201).json({
      acknowledged: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    next(error);
  }
});
router.post("/logs/capped", async (req, res, next) => {
  try {
    const result = await service.createLogsCollection();
    return res.status(201).json({ acknowledged: true, ...result });
  } catch (error) {
    next(error);
  }
});
router.post("/books/index", async (req, res, next) => {
  try {
    const result = await service.createBooksIndex();
    return res.status(201).json({
      acknowledged: true,
      indexName: result.indexName,
    });
  } catch (error) {
    next(error);
  }
});
export default router;
