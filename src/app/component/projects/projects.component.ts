import { Component, Input } from '@angular/core';
import { CardProjectComponent } from './card-project/card-project.component';
import { CommonModule } from '@angular/common'; // Import NgIf

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardProjectComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'

})
export class ProjectsComponent {
  activeButton = 'All'; // Default active button

  constructor() {}
  setActive(button: string): void {
    this.activeButton = button;
  }
}
