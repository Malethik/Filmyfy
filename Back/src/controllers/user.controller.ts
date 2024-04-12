import { type Request, type Response } from "express";
import createDebug from "debug";
import { FilmRepository } from "../repositorio/film.repo.js";
import { type Film } from "../entities/film.js";

const debug = createDebug("W7E:router:controller");

export class FilmController {
  constructor(private readonly repo: FilmRepository) {
    this.repo = repo;
    debug("Instancied controller");
  }

  getsAll(req: Request, res: Response) {
    const result = this.repo.readAll();
    res.status(200);
    res.json(result);
  }

  getById(req: Request, res: Response) {
    const { id } = req.params;
    const result = this.repo.readById(id);
    res.status(200);
    res.json(result);
  }

  create(req: Request, res: Response) {
    const data = req.body as Film;
    const result = this.repo.create(data);
    res.status(201);
    res.send(result);
  }

  patching(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body as Film;
    const result = this.repo.update(id, data);
    res.json(result);
  }

  erase(req: Request, res: Response) {
    const { id } = req.params;
    const result = this.repo.delete(id);
    res.send(result);
  }
}
