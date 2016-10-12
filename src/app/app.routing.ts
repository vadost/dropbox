import { Routes, RouterModule } from '@angular/router';

import {FilesComponent} from "./components/files.component";
import {PhotosComponent} from "./components/photos/photos.component";
import {SharingComponent} from "./components/sharing.component";
import {LinksComponent} from "./components/links.component";
import {EventsComponent} from "./components/events.component";
import {StartedComponent} from "./components/started.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/photos', pathMatch: 'full' },
  { path: 'files', component: FilesComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'sharing', component: SharingComponent },
  { path: 'links', component: LinksComponent },
  { path: 'events', component: EventsComponent },
  { path: 'started', component: StartedComponent },
  { path: '**', redirectTo: '/photos'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
