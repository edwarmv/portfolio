import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoIconComponent } from '../logo-icon/logo-icon.component';

@Component({
  selector: 'ed-logo',
  standalone: true,
  imports: [CommonModule, LogoIconComponent],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {
  @Input()
  boldLabel = true;
}
