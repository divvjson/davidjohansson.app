import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ThemeService } from './services/theme.service';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(public themeService: ThemeService) { }
}
