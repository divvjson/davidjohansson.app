import { Component, input } from '@angular/core';
import { Work } from '../showcase/showcase.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  public work = input.required<Work>();
}
