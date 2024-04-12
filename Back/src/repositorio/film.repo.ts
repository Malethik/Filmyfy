import createDebug from "debug";
import { Film, Root } from "../entities/film.js";
import fs from "fs";

const debug = createDebug("W7E:repository:user");

const ROOT: Root[] = [];
const FILM: Film[] = [];

export class FilmRepository {
  film = FILM;
  root = ROOT;
  constructor() {
    debug("Instancied repository!");
    this.loadDb();
  }

  loadDb() {
    try {
      const rawData = fs.readFileSync("db.json");
      const data = JSON.parse(rawData.toString());
      this.film = data.film;
    } catch (error) {
      debug(`Error loading data from JSON:${error}`);
    }
  }

  readAll() {
    return this.film;
  }

  readById(id: string) {
    return this.film.find((film) => film.id === id);
  }

  create(datos: Film) {
    const newFilm = {
      id: (this.root.length + 1).toString(),
      titolo: datos.titolo,
      anno: datos.anno,
      genere: [],
      regista: datos.regista,
      valutazione: datos.valutazione,
    };
    this.film = [...this.film, newFilm];
    return newFilm;
  }

  update(id: string, data: Partial<Film>) {
    const film = this.film.find((film) => film.id === id);
    if (!film) {
      throw new Error(`User ${id} not found`);
    }

    const newFilm = { ...film, ...data };
    this.film = this.film.map((film) => (film.id === id ? newFilm : film));
    return newFilm;
  }

  delete(id: string) {
    const film = this.film.find((film) => film.id === id);
    this.film = this.film.filter((film) => film.id !== id);
    return film;
  }
}
