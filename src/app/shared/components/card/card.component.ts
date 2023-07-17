import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';
import { Card, CardAction } from './card.interface';

@Component({
  selector: 'ed-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements Card {
  @Input()
  imgSrc?: string;

  @Input()
  tags?: string[];

  @Input()
  title?: string;

  @Input()
  altTitle?: string;

  @Input()
  description?:string;

  @Input()
  actions?: CardAction[];
}
