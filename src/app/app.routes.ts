import { Routes } from '@angular/router';
import { Incidents } from './features/incidents/incidents';

export const routes: Routes = [
	{ path: 'incidents', component: Incidents },
	{ path: '', redirectTo: 'incidents', pathMatch: 'full' }
];
