import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ed-title',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  @Input({ required: true })
  prefix!: string;

  @Input({ required: true })
  title!: string;

  @Input()
  action?: { text: string, href: string };
}
