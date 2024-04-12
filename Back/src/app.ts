import express from "express";
import morgan from "morgan";
import cors from "cors";
import createDebug from "debug";
import { filmRouter } from "./routers/user.router.js";
export const app = express();

const debug = createDebug("W7E:app");
debug("Starting app");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static("./public"));
app.use("/film", filmRouter);

app.use((req, res, next) => {
  debug("Alejandro approved! ;)");
  next();
});
