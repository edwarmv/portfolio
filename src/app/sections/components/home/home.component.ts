import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoIconComponent } from '@shared/components/logo-icon/logo-icon.component';
import { FigureMatrixComponent } from '@shared/components/figure-matrix/figure-matrix.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ed-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LogoIconComponent,
    FigureMatrixComponent,
    IconComponent,
    ButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
