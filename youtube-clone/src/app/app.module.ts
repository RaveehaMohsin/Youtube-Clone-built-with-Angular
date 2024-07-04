import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { DashboardComponent } from './maincontent/dashboard/dashboard.component';
import { HomelistvideosComponent } from './maincontent/homelistvideos/homelistvideos.component';
import { SingleVideoComponent } from './maincontent/homelistvideos/single-video/single-video.component';
import { YourvideosComponent } from './maincontent/yourvideos/yourvideos.component';
import { AddeditnewvideoComponent } from './maincontent/yourvideos/addeditnewvideo/addeditnewvideo.component';
import { LikedvideosComponent } from './maincontent/likedvideos/likedvideos.component';
import { HistoryvideosComponent } from './maincontent/historyvideos/historyvideos.component';
import { WatchlikeVideoDivComponent } from './maincontent/historyvideos/watchlike-video-div/watchlike-video-div.component';
import { LikevideoComponent } from './maincontent/likedvideos/likevideo/likevideo.component';
import { VideodisplayComponent } from './maincontent/videodisplay/videodisplay.component';
import { SinglevideodisplayComponent } from './maincontent/videodisplay/singlevideodisplay/singlevideodisplay.component';
import { VideoListComponent } from './searchvideopage/searchvideopage.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincontentComponent,
    DashboardComponent,
    HomelistvideosComponent,
    SingleVideoComponent,
    YourvideosComponent,
    AddeditnewvideoComponent,
    LikedvideosComponent,
    HistoryvideosComponent,
    WatchlikeVideoDivComponent,
    LikevideoComponent,
    VideodisplayComponent,
    SinglevideodisplayComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , FontAwesomeModule , FormsModule , ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [
   provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
