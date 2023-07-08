import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoIconComponent } from '@shared/components/logo-icon/logo-icon.component';

@Component({
  selector: 'ed-home',
  standalone: true,
  imports: [CommonModule, LogoIconComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
