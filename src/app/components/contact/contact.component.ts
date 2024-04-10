import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faLocation, faEnvelope, faPhone, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

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
  public faUpRightFromSquare = faUpRightFromSquare;
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
    },
    {
      icon: faPhone,
      label: 'Phone',
      type: 'tel',
      value: '+46 79 33 44 591'
    },
    {
      icon: faInstagram,
      label: 'Instagram',
      type: 'text',
      value: 'divvjson',
      href: 'https://instagram.com/divvjson'
    },
    {
      icon: faXTwitter,
      label: 'X',
      type: 'text',
      value: 'divvjson',
      href: 'https://x.com/divvjson'
    }
  ];
}
