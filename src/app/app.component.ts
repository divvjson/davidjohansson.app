import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { MatDividerModule } from '@angular/material/divider';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContactComponent,
    HeaderComponent,
    MatDividerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(public themeService: ThemeService) { }
}
