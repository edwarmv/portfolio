import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'ed-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    IconComponent,
    BurgerMenuComponent,
    LogoComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  scrollOffsetToHideHeader = 40;
  currentTimeoutId: ReturnType<typeof setTimeout> | null = null;
  lastScrollY = 0;

  @HostBinding('style.top')
  top = '0';

  /**
   * We tried to mimic the behavior of materail app bar scrolling
   * check out {@link https://m2.material.io/components/app-bars-top#behavior}
   */
  @HostListener('window:scroll')
  handleWindowScroll() {
    if (this.currentTimeoutId) {
      clearTimeout(this.currentTimeoutId);
    }
    this.currentTimeoutId = setTimeout(() => {
      const headerHeight = this._elementRef.nativeElement.offsetHeight;
      if (
        window.scrollY >= this.scrollOffsetToHideHeader &&
        this.lastScrollY - window.scrollY <= 0
      ) {
        this.top = `-${headerHeight}px`;
      } else {
        this.top = '0';
      }
      this.lastScrollY = window.scrollY;
    }, 100);
  }

  constructor(private _elementRef: ElementRef<HTMLElement>) {}
}
