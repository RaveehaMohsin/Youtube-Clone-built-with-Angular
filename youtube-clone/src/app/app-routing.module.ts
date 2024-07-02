import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomelistvideosComponent } from './maincontent/homelistvideos/homelistvideos.component';
import { SingleVideoComponent } from './maincontent/homelistvideos/single-video/single-video.component';

const routes: Routes = [
  {path: 'main/homepage' , component:SingleVideoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
