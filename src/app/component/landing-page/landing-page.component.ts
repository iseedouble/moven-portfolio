import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
    ResumeComponent,
    ServicesComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
