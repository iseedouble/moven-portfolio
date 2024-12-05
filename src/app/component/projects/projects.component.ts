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

  cardProject = [
    {
      img: 'https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-01.jpg',
      title: 'Startup landing page',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitaedolor ultrices libero.',
      position: {
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
      },
    },
    {
      img: 'https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-02.jpg',
      title: 'Job portal landing page',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitaedolor ultrices libero.',
      position: {
        top: '0px',
        bottom: '0px',
        left: '550px',
        right: '0px',
      },
    },
    {
      img: 'https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-03.jpg',
      title: 'SaaS landing page',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitaedolor ultrices libero.',
      position: {
        top: '458.949px',
        bottom: '0px',
        left: '0px',
        right: '0px',
      },
    },
    {
      img: 'https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-04.jpg',
      title: 'Business & corporate template',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitaedolor ultrices libero.',
      position: {
        top: '458.949px',
        bottom: '0px',
        left: '550px',
        right: '0px',
      },
    },
  ];

  public projectMap: Map<string, string[]> = new Map([
    ['All', ['project1', 'project2', 'project3', 'project4']],
    ['Web Design', ['project1', 'project2', 'project3']],
    ['Graphics', ['project1', 'project3']],
    ['App', ['project2', 'project4']],
  ]);

  constructor() {}
  setActive(button: string): void {
    this.activeButton = button;
  }
}
