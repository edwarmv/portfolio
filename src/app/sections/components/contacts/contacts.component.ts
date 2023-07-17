import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/components/title/title.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'ed-contacts',
  standalone: true,
  imports: [CommonModule, TitleComponent, IconComponent, ButtonComponent],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {}
