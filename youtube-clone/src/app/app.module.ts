import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { DashboardComponent } from './maincontent/dashboard/dashboard.component';
import { HomelistvideosComponent } from './maincontent/homelistvideos/homelistvideos.component';
import { SingleVideoComponent } from './maincontent/homelistvideos/single-video/single-video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincontentComponent,
    DashboardComponent,
    HomelistvideosComponent,
    SingleVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , FontAwesomeModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
