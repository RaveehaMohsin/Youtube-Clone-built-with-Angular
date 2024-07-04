import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { DashboardComponent } from './maincontent/dashboard/dashboard.component';
import { HomelistvideosComponent } from './maincontent/homelistvideos/homelistvideos.component';
import { SingleVideoComponent } from './maincontent/homelistvideos/single-video/single-video.component';
import { YourvideosComponent } from './maincontent/yourvideos/yourvideos.component';
import { AddeditnewvideoComponent } from './maincontent/yourvideos/addeditnewvideo/addeditnewvideo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincontentComponent,
    DashboardComponent,
    HomelistvideosComponent,
    SingleVideoComponent,
    YourvideosComponent,
    AddeditnewvideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , FontAwesomeModule , FormsModule , ReactiveFormsModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
