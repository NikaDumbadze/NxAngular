import { Routes } from '@angular/router';

import { CommunicationComponent } from './communication/communication.component';

export const routes: Routes = [
    { path: 'communication', component: CommunicationComponent },
];

export const components = [CommunicationComponent];