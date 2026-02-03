import { Router } from "express";
import * as service from "./books.service.js";
const router = Router();
router.post("/", async (req, res, next) => {
  try {
    const result = await service.createBook(req.body);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});
router.post("/batch", async (req, res, next) => {
  try {
    const result = await service.createManyBooks(req.body);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});
router.patch("/Future", async (req, res, next) => {
  try {
    const result = await service.updateFutureBook();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});
router.get("/title", async (req, res, next) => {
  try {
    const result = await service.findBookByTitle(req.query.title);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});
router.get("/year", async (req, res, next) => {
  try {
    const { from, to } = req.query;
    const result = await service.findBooksBetweenYears(+from, +to);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});
router.get("/genre", async (req, res, next) => {
  try {
    const result = await service.findBooksByGenre(req.query.genre);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});
router.get("/skip-limit", async (req, res, next) => {
  try {
    const result = await service.findWithSkipLimit();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});
router.get("/year-integer", async (req, res, next) => {
  try {
    const result = await service.findYearInteger();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});
router.get("/excluded-genres", async (req, res, next) => {
  try {
    const result = await service.excludeGenres();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});
router.delete("/before-year", async (req, res, next) => {
  try {
    const result = await service.deleteBooksBeforeYear(+req.query.year);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});
router.get("/aggregate1", async (req, res, next) => {
  try {
    const result = await service.aggregate1();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});
router.get("/aggregate2", async (req, res, next) => {
  try {
    const result = await service.aggregate2();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});
router.get("/aggregate3", async (req, res, next) => {
  try {
    const result = await service.aggregate3();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});
router.get("/aggregate4", async (req, res, next) => {
  try {
    const result = await service.aggregate4();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});
export default router;
