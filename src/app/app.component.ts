import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './sections/components/home/home.component';
import { WorksComponent } from './sections/components/works/works.component';
import { AboutMeComponent } from './sections/components/about-me/about-me.component';
import { ContactsComponent } from './sections/components/contacts/contacts.component';
import { SkillsComponent } from '@sections/components/skills/skills.component';
import { FooterComponent } from '@shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    WorksComponent,
    AboutMeComponent,
    ContactsComponent,
    SkillsComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'portfolio';
}
