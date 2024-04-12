import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <address><p>Powered By Daniele Quintiliani</p></address>
    </footer>
  `,
  styles: `:host{
    display: block;
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
  }`,
})
export class FooterComponent {}
