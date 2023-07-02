import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'button[edButton],a[edButton]',
  host: {
    class: 'ed-button',
  },
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input()
  btnStyle: 'basic' | 'stroked' = 'basic';

  @HostBinding('class.ed-button--basic')
  get basicStyle() {
    return this.btnStyle === 'basic';
  }

  @HostBinding('class.ed-button--stroked')
  get strokedStyle() {
    return this.btnStyle === 'stroked';
  }
}
