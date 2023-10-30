import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { TitleComponent } from 'src/app/shared/components/title/title.component';
import { Card } from '@shared/components/card/card.interface';

@Component({
  selector: 'ed-works',
  standalone: true,
  imports: [CommonModule, CardComponent, TitleComponent],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorksComponent {
  cards: Card[] = [
    {
      imgSrc: 'assets/image/projects/ws-thinking-reactively-pokedex.png',
      tags: ['TypeScript', 'SCSS', 'HTML', 'Angular', 'RxJS'],
      title: 'Pokédex',
      description:
        'Practical excersite about reactive programming and how to think reactively',
      actions: [
        {
          label: 'live',
          url: 'https://edwarmv.github.io/ws-thinking-reactively-pokedex/',
        },
        {
          label: 'github',
          url: 'https://github.com/edwarmv/ws-thinking-reactively-pokedex.git',
        },
      ],
    },
    {
      imgSrc: 'assets/image/projects/clothing-e-commerce-app.png',
      tags: ['TypeScript', 'CSS', 'HTML', 'React'],
      title: 'Clothing E-Commerce App',
      description: 'Demo app about an clothing e-commerce app',
      actions: [
        {
          label: 'live',
          url: 'https://edwarmv.github.io/clothing-e-commerce-app/',
        },
        {
          label: 'github',
          url: 'https://github.com/edwarmv/clothing-e-commerce-app.git',
        },
      ],
    },
    {
      imgSrc: 'assets/image/projects/scibs.png',
      tags: [
        'TypeScript',
        'SCSS',
        'HTML',
        'Python',
        'JavaScript',
        'CSS',
        'Shell',
        'Angular',
      ],
      title: 'SCIBS - Sistema de Control de Inventario para el Banco de Sangre',
      description: 'Inventory control system for an blood bank',
      actions: [
        {
          label: 'github',
          url: 'https://github.com/edwarmv/scibs.git',
        },
      ],
    },
  ];
}
