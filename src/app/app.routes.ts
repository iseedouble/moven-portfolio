import { Routes } from '@angular/router';
import { CardDetailsProjectComponent } from './component/projects/card-details-project/card-details-project/card-details-project.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'project-details', component: CardDetailsProjectComponent }
];
