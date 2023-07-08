import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/components/title/title.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { FigureMatrixComponent } from '@shared/components/figure-matrix/figure-matrix.component';

@Component({
  selector: 'ed-about-me',
  standalone: true,
  imports: [CommonModule, TitleComponent, ButtonComponent, FigureMatrixComponent],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent {

}
