import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';

@Component({
  selector: 'ed-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, IconComponent, BurgerMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
}
