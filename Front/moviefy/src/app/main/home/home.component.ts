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
      display: flex;
      align-content: center;
      .h1{
        width: 100%;
      }
      .main{
        display: flex;
        gap:1rem;
        align-content: center;
      }



    }`,
})
export default class HomeComponent {
  filmService = inject(StateService);
}
