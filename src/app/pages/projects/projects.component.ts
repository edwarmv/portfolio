import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@shared/components/card/card.component';
import { TitleComponent } from '@shared/components/title/title.component';
import { CARDS } from './projects.cards';
import { Card } from '@shared/components/card/card.interface';

@Component({
  selector: 'ed-projects',
  standalone: true,
  imports: [CommonModule, CardComponent, TitleComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  cards: Card[] = CARDS;
}
