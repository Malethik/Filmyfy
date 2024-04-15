import express from "express";
import morgan from "morgan";
import cors from "cors";
import createDebug from "debug";
import { FilmRouter } from "./routers/film.router.js";
import { FilmRepository } from "./repositorio/film.repo.js";
import { FilmController } from "./controllers/film.controller.js";
import { ErrorsMidleware } from "./MiddleWare/error.middleware.js";

const debug = createDebug("W7E:app");
debug("Starting app");

export const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.static("./public"));

  const filmRepo = new FilmRepository();
  const filmController = new FilmController(filmRepo);
  const filmRouter = new FilmRouter(filmController);
  app.use("/film", filmRouter.router);

  const errormiddleware = new ErrorsMidleware();
  app.use(errormiddleware.handle.bind(errormiddleware));
  return app;
};
