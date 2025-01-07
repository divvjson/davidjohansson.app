import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { MatDividerModule } from '@angular/material/divider';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AboutMeComponent,
    ContactComponent,
    EducationComponent,
    HeaderComponent,
    MatDividerModule,
    ShowcaseComponent,
    WorkExperienceComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(public themeService: ThemeService) { }
}
