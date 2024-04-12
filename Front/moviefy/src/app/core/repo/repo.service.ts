import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  url = 'http://localhost:3400/film';

  constructor(private http: HttpClient) {}

  getFilm(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.url}`) as Observable<Film[]>;
  }

  addFilm(film: Film): Observable<Film> {
    const { ...films } = film;
    const data: Film = { ...film };
    return this.http.post<Film>(this.url, data) as Observable<Film>;
  }
  deleteFilm(model: string): Observable<Film> {
    return this.http.delete<Film>(
      `${this.url}` + `?model=` + `${model}`
    ) as Observable<Film>;
  }
}
