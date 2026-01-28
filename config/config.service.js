import { resolve } from "node:path";
import { config } from "dotenv";
export const NODE_ENV = process.env.NODE_ENV || "development";
const envPath = {
  development: `.env.development`,
  production: `.env.production`,
};
config({ path: resolve(`./config/${envPath[NODE_ENV]}`) });
export const port = process.env.PORT || 3000;
export const MONGO_URI = process.env.MONGO_URI;
