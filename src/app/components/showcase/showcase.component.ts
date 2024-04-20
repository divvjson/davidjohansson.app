import { Component } from '@angular/core';
import { WorkComponent } from '../work/work.component';

type WorkGroup = {
  year: number;
  works: Work[];
};

export type Work = {
  title: string;
  description: string;
  imageUrl: string;
  repositoryUrl: string;
  applicationUrl: string;
};

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [
    WorkComponent
  ],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {
  public workGroups: WorkGroup[] = [
    {
      year: 2024,
      works: [
        {
          title: 'Räkna på inflation',
          description: 'Inflationskalkylator - Jämför penningvärde över tid justerat för inflation.',
          imageUrl: 'assets/images/showcase/rakna-pa-inflation.png',
          repositoryUrl: 'https://github.com/divvjson/adjust-for-inflation',
          applicationUrl: 'https://rakna-pa-inflation.davidjohansson.app'
        }
      ]
    },
    {
      year: 2023,
      works: [
        {
          title: 'Music Player',
          description: 'Listen to tracks and rank them using a drag-and-drop-able list.',
          imageUrl: 'assets/images/showcase/music-player.png',
          repositoryUrl: 'https://github.com/divvjson/music-player',
          applicationUrl: 'https://musicplayer.davidjohansson.app'
        },
        {
          title: 'Resurskarta',
          description: 'Fordon på en karta som uppdateras i realtid.',
          imageUrl: 'assets/images/showcase/resurskarta.png',
          repositoryUrl: 'https://github.com/divvjson/resurskarta',
          applicationUrl: 'https://resurskarta.davidjohansson.app'
        },
        {
          title: 'Color Palette Generator',
          description: 'Simple tool for creating color palettes.',
          imageUrl: 'assets/images/showcase/color-palette-generator.png',
          repositoryUrl: 'https://github.com/divvjson/material-color-palette-generator',
          applicationUrl: 'https://mcpg.davidjohansson.app'
        }
      ]
    }
  ];
}
