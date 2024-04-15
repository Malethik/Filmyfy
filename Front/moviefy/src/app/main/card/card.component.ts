import { Component, input } from '@angular/core';
import { Film } from '../../core/model/model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: ` <p>{{ film().titolo }}</p> `,
  styles: `:host{
    
  }`,
})
export class CardComponent {
  film = input<Film>({} as Film);
}
