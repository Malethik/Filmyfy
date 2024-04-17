import { Serie } from "@prisma/client";
import { BaseController } from "./base.controller.js";
import { SerieCreate } from "../entities/series.js";
import { Repo } from "../repositorio/type.repo.js";
import { updateSchema, createSchema } from "../entities/film.schema";

export abstract class SerieController extends BaseController<
  Serie,
  SerieCreate
> {
  constructor(protected readonly repo: Repo<Serie, SerieCreate>) {
    super(repo, createSchema, updateSchema);
  }
}
