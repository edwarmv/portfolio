import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

type CardAction = {
  label: string
}

@Component({
  selector: 'ed-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input()
  imgSrc = '';

  @Input()
  tags: string[] = [];

  @Input()
  title = '';

  @Input()
  altTitle = '';

  @Input()
  description = '';

  @Input()
  actions: CardAction[] = [];
}
