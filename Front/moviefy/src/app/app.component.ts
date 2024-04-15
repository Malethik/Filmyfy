import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HomeComponent from './main/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <app-home />

    <app-footer> </app-footer>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'moviefy';
}
