import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@shared/components/card/card.component';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  selector: 'ed-skills',
  standalone: true,
  imports: [CommonModule, CardComponent, TitleComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {

}
