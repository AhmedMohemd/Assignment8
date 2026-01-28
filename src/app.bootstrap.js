import { NODE_ENV, port } from "../config/config.service.js";
import { connectDB } from "./DB/connection.db.js";
import express from "express";
import { booksRouter, collectionsRouter, logsRouter } from "./modules/index.js";
async function bootstrap() {
  const app = express();
  app.use(express.json());
  await connectDB();
  app.get("/", (req, res , next) => res.send("Hello world"));
  app.use("/books", booksRouter);
  app.use("/collection", collectionsRouter);
  app.use("/logs", logsRouter);
  app.use("{/*dum}", (req, res, next) => {
    return res.status(404).json({ message: "Invalid application routing" });
  });
  app.use((error, req, res, next) => {
    const status = error.cause?.status ?? 500;
    return res.status(status).json({
      error_message:
        status == 500
          ? "something went wrong"
          : (error.message ?? "something went wrong"),
      stack: NODE_ENV == "development" ? error.stack : undefined,
    });
  });
  app.listen(port, () =>
    console.log(`Server is running on http://localhost:${port}`),
  );
}
export default bootstrap;
