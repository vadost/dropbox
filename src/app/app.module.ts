import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilesComponent } from './components/files.component';
import { LinksComponent } from './components/links.component';
import { SharingComponent } from './components/sharing.component';
import { EventsComponent } from './components/events.component';
import { StartedComponent } from './components/started.component';
import { PhotosComponent } from './components/photos/photos.component';
import {routing} from "./app.routing";
import {PhotosService} from "./services/photos.service";
import { PhotoItemComponent } from './components/photos/photo-item/photo-item.component';
import { ProgressBarComponent } from './navbar/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilesComponent,
    LinksComponent,
    SharingComponent,
    EventsComponent,
    StartedComponent,
    PhotosComponent,
    PhotoItemComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
