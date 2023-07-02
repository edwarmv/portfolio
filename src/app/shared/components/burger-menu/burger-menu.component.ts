import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ed-burger-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BurgerMenuComponent {
  private _ref = inject(ChangeDetectorRef);

  burgerOpen = false;

  toggleBurger() {
    this.burgerOpen = !this.burgerOpen;
    this._ref.detectChanges();
  }
}
