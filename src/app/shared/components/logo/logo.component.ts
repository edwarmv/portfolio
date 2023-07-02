import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ed-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.svg',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {
  @Input()
  strokeWidth = '3px';

  @Input()
  fill = 'none'
}
