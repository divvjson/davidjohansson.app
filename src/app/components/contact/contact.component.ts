import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faLocation, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type ContactItem = {
  icon: IconDefinition;
  label: string;
  type: 'text' | 'email' | 'tel';
  value: string;
  href?: string;
};

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MatButtonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public items: ContactItem[] = [
    {
      icon: faLocation,
      label: 'Location',
      type: 'text',
      value: 'Malmö, SE'
    },
    {
      icon: faGithub,
      label: 'GitHub',
      type: 'text',
      value: 'divvjson',
      href: 'https://github.com/divvjson'
    },
    {
      icon: faEnvelope,
      label: 'Email',
      type: 'email',
      value: 'me@davidjohansson.app'
    }
  ];
}
