import { Injectable, inject, signal } from '@angular/core';
import { Film } from '../model/model';
import { ServerService } from '../repo/repo.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private serverService = inject(ServerService);
  private _filmState = signal<Film[]>([]);
  public filmState = this._filmState.asReadonly();

  constructor() {
    this.loadServerMoto();
  }

  loadServerMoto() {
    this.serverService.getFilm().subscribe((films) => {
      this._filmState.update(() => films);
    });
  }
  addMoto(data: Film): void {
    this.serverService.addFilm(data).subscribe((film) => {
      this._filmState.update((films) => [...films, film]);
    });
  }
}
