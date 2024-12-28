import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-resume-section',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './resume-section.component.html',
  styleUrl: './resume-section.component.scss'
})
export class ResumeSectionComponent {

  @Input() isLeftSection!: boolean;
  @Input() title!: string;
  @Input() title2!: string;
  @Input() description!: string;
  @Input() date!: string;

}
