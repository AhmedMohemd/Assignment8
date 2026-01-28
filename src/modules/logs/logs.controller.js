import { Router } from "express";
import { createLog } from "./logs.service.js";
const router = Router();
router.post("/", async (req, res, next) => {
  try {
    const result = await createLog(req.body);
    return res.status(201).json({ message: "Log created", result });
  } catch (error) {
    next(error);
  }
});
export default router;
