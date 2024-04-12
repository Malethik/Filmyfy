import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: ` <h1>FILMYFY</h1> `,
  styles: `:host{
    display: block;
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
  }`,
})
export class HeaderComponent {}
