import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { TitleComponent } from 'src/app/shared/components/title/title.component';

@Component({
  selector: 'ed-works',
  standalone: true,
  imports: [CommonModule, CardComponent, TitleComponent],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorksComponent {

}
