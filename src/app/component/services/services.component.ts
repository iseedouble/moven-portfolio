import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {TranslateModule} from "@ngx-translate/core";   // <--- standalone only
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TranslateModule, CardComponent, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  cards = [
    { title: 'Card 1', description: 'Description for Card 1' },
    { title: 'Card 2', description: 'Description for Card 2' },
    { title: 'Card 3', description: 'Description for Card 3' },
    { title: 'Card 4', description: 'Description for Card 4' },
  ];
  constructor(private translate: TranslateService) {

  }
}
