import { Component, Inject  } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ServicesComponent } from './component/services/services.component';

import {TranslateModule} from "@ngx-translate/core";   // <--- standalone only
import {TranslateService} from "@ngx-translate/core";
import { initFlowbite } from 'flowbite';
import { HomeComponent } from "./component/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, TranslateModule, ServicesComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'moven-portfolio';
  constructor(@Inject(DOCUMENT) private document: Document, private translate: TranslateService,) {
    const defaultLang = this.document.documentElement.lang || 'en';
    this.translate.addLangs(['fr', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use(defaultLang);
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
