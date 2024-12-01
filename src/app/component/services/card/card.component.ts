import { Component, Input, ViewEncapsulation } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.None // Disable encapsulation if isolation causes issues

})
export class CardComponent {

  @Input() svgPath!: string;
  @Input() title!: string;
  @Input() description!: string;

  constructor(private translate: TranslateService) {

  }
}
