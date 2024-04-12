import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: ` <p>home works!</p> `,
  styles: `
    :host {
      display: block;

    }`,
})
export default class HomeComponent {}
