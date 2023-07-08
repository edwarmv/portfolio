import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ed-logo-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-icon.component.svg',
  styleUrls: ['./logo-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoIconComponent {
  @Input()
  strokeWidth = '3px';

  @Input()
  fill = 'none'
}
