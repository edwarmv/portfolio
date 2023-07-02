import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ed-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent {

}
