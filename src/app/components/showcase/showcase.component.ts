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
          title: 'Sales Dashboard',
          description: 'Interactive statistics, filter data for tailored insights.',
          imageUrl: 'assets/images/showcase/salesdashboard_original.png',
          repositoryUrl: 'https://github.com/divvjson/SalesDashboard',
          applicationUrl: 'https://salesdashboard.davidjohansson.app'
        },
        {
          title: 'Räkna på inflation',
          description: 'Penningvärde över tid justerat för inflation.',
          imageUrl: 'assets/images/showcase/rakna-pa-inflation_original.png',
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
          description: 'Listen to music.',
          imageUrl: 'assets/images/showcase/music-player_75.png',
          repositoryUrl: 'https://github.com/divvjson/music-player',
          applicationUrl: 'https://musicplayer.davidjohansson.app'
        },
        {
          title: 'Resurskarta',
          description: 'Fordon på en karta som uppdateras i realtid.',
          imageUrl: 'assets/images/showcase/resurskarta_50.png',
          repositoryUrl: 'https://github.com/divvjson/resurskarta',
          applicationUrl: 'https://resurskarta.davidjohansson.app'
        },
        {
          title: 'Color Palette Generator',
          description: 'Simple tool for creating color palettes.',
          imageUrl: 'assets/images/showcase/color-palette-generator_original.png',
          repositoryUrl: 'https://github.com/divvjson/material-color-palette-generator',
          applicationUrl: 'https://mcpg.davidjohansson.app'
        }
      ]
    }
  ];
}
