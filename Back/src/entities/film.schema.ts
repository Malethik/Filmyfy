import Joi from "joi";
import { type FilmUpdate, type FilmCreate } from "./film";


export const createSchema = Joi.object<FilmCreate>({
  titolo: Joi.string().required().min(1).max(20),
  anno: Joi.string().required(),
  regista: Joi.string().required(),
});

export const updateSchema = Joi.object<FilmUpdate>({
  titolo: Joi.string().min(1).max(20),
  anno: Joi.string(),
  regista: Joi.string(),
  genere: Joi.array().items(Joi.string()),
  valutazione: Joi.string(),
});

