import { Component, Input } from '@angular/core';
import { Position } from '../../../model/position';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss'
})
export class CardProjectComponent {

  @Input() img!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() position!: Position;

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

}
