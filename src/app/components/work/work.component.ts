import { Component, input } from '@angular/core';
import { Work } from '../showcase/showcase.component';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MatButtonModule
  ],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  public work = input.required<Work>();
  public faUpRightFromSquare = faUpRightFromSquare;
  public faGithub = faGithub;
}
