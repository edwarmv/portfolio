import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ed-main',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    WorksComponent,
    AboutMeComponent,
    ContactsComponent,
    SkillsComponent,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
