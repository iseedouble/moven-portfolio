import { Component, Input } from '@angular/core';
import { Position } from '../../../model/position';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SharedDataServiceService } from '../../../service/shared-data-service.service';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [CommonModule, RouterLink ],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss'
})
export class CardProjectComponent {
  @Input() img!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() position!: Position;
  @Input() activeButton!: string;

  cardProject = [
    {
      img: 'https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-01.jpg',
      title: 'MovensLabs',
      secondTitle: 'A Solana Token Creator',
      description:
        'A crypto website to create custom Solana coins effortlessly.',
      longDescription:'The Moven Solana Token Creator offers a streamlined, professional solution for creating and customizing SPL tokens on the Solana blockchain. Designed to accommodate both beginners and experienced developers, this intuitive platform enables users to launch tokens quickly and efficiently, without the need for technical expertise.', 
      projectInfo: {
        category: '',
        date: '',
        tags: '',
        website: 'https://movenlabs.com/'
      },
      position: {
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
      },
    },
    {
      img: 'https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-02.jpg',
      title: 'PC Builder',
      description:
        'An AI-powered web scraper that generates PC-partpicker links for tailored PC builds.',
      position: {
        top: '0px',
        bottom: '0px',
        left: '550px',
        right: '0px',
      },
    },
    {
      img: 'https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-03.jpg',
      title: 'Telegram Crypto Bot',
      description:
        'A suite of bots for Solana trading, coin tracking, and scheduling tasks.',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet. Ligula ullamcorper proin libero nunc consequat interdum varius. Quam pellentesque nec nam.',
      position: {
        top: '458.949px',
        bottom: '0px',
        left: '0px',
        right: '0px',
      },
    },
    {
      img: 'https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-04.jpg',
      title: 'Discord Flight Scraper',
      description:
        'Automated tools to fetch real-time flight data from the United Airlines website.',
      position: {
        top: '458.949px',
        bottom: '0px',
        left: '550px',
        right: '0px',
      },
    },
  ];

  public projectMap: Map<string, string[]> = new Map([
    ['All', ['project0', 'project1', 'project2', 'project3']],
    ['Web Design', ['project0', 'project1', 'project2']],
    ['Crypto', ['project0', 'project2']],
    ['AI', ['project0', 'project3']],
  ]);

  constructor(private sharedDataService: SharedDataServiceService, private router: Router) {}

  debugCard(card: any) {
    this.sharedDataService.setData(card);
    this.router.navigate(['/project-details']);   
  }
}
