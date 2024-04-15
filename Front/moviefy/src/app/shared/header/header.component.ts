import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: ` <h1>MOVIEFY</h1> `,
  styles: `:host{
    display: flex;
    background-color: #333;
    color: white;
    justify-content: center;
    padding: 10px;
    width: 100%;
  }`,
})
export class HeaderComponent {}
