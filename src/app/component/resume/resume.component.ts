import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ResumeSectionComponent } from './resume-section/resume-section.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [TranslateModule, CommonModule, ResumeSectionComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

}
