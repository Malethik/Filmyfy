import { Component, inject } from '@angular/core';
import { StateService } from '../../core/state/state.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  template: ` <h2>LIST OF FILM</h2>
    <div class="main">
      @for (item of filmService.filmState(); track $index) {
      <app-card [film]="item"></app-card>
      }
    </div>`,
  styles: `
    :host {
      display: block;

    }`,
})
export default class HomeComponent {
  filmService = inject(StateService);
}
