import { Router as router } from "express";
import createDebug from "debug";
import { FilmController } from "../controllers/user.controller.js";
import { FilmRepository } from "../repositorio/film.repo.js";

const debug = createDebug("W7E:router:user");
debug("starting router");

export const filmRouter = router();
const filmController = new FilmController(new FilmRepository());

filmRouter.get("/", filmController.getsAll.bind(filmController));
filmRouter.get("/:id", filmController.getById.bind(filmController));
filmRouter.post("/", filmController.create.bind(filmController));
filmRouter.patch("/:id", filmController.patching.bind(filmController));
filmRouter.delete("/:id", filmController.erase.bind(filmController));
