import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { TitleComponent } from 'src/app/shared/components/title/title.component';
import { Card } from '@shared/components/card/card.interface';
import { CARDS } from './works.cards';

@Component({
  selector: 'ed-works',
  standalone: true,
  imports: [CommonModule, CardComponent, TitleComponent],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorksComponent {
  cards: Card[] = CARDS;
}
