import { Component, input } from '@angular/core';
import { Work } from '../showcase/showcase.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  public work = input.required<Work>();
}
