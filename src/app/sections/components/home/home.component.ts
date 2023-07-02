import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';

@Component({
  selector: 'ed-home',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
