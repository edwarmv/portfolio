import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/components/title/title.component';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'ed-contacts',
  standalone: true,
  imports: [CommonModule, TitleComponent, IconComponent],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent {

}
