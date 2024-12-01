import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {TranslateModule} from "@ngx-translate/core";   // <--- standalone only

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  constructor(private translate: TranslateService) {

  }
}
