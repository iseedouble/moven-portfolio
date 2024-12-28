import { Component, Input } from '@angular/core';
import { Position } from '../../../model/position';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss',
  animations: [
    trigger('minimizeAndDisappear', [
      // Fade-in animation
      transition(':enter', [
        animate(
          '300ms ease-out',
          keyframes([
            style({ transform: 'scale(0)', opacity: 0, offset: 0 }), // Fully minimized and invisible
            style({ transform: 'scale(0.5)', opacity: 0.5, offset: 0.5 }), // Grow halfway
            style({ transform: 'scale(1)', opacity: 1, offset: 1 }), // Fully grown and visible
          ])
        ),
      ]),
      // Minimize and disappear animation
      transition(':leave', [
        animate(
          '300ms ease-in',
          keyframes([
            style({ transform: 'scale(1)', opacity: 1, offset: 0 }), // Start at full size
            style({ transform: 'scale(0.5)', opacity: 0.5, offset: 0.5 }), // Shrink and fade halfway
            style({ transform: 'scale(0)', opacity: 0, offset: 1 }), // Fully minimized and invisible
          ])
        ),
      ]),
    ]),
  ],
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
      description:
        'A crypto website to create custom Solana coins effortlessly.',
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

  constructor() {}
}
