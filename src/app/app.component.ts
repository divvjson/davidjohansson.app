import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ThemeService } from './services/theme.service';
import { MatDividerModule } from '@angular/material/divider';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContactComponent,
    MatButtonModule,
    MatDividerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(public themeService: ThemeService) { }
}
