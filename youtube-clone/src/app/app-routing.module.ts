import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomelistvideosComponent } from './maincontent/homelistvideos/homelistvideos.component'; 
import { YourvideosComponent } from './maincontent/yourvideos/yourvideos.component';
import { AddeditnewvideoComponent } from './maincontent/yourvideos/addeditnewvideo/addeditnewvideo.component';
import { LikedvideosComponent } from './maincontent/likedvideos/likedvideos.component';
import { HistoryvideosComponent } from './maincontent/historyvideos/historyvideos.component';

const routes: Routes = [
  {path: '' , redirectTo: 'main/homepage',pathMatch:'full'},
  {path: 'main' , children:[
    {path :'homepage' , component : HomelistvideosComponent}, 
    {path :'yourvideos/editvideo/:id' , component : AddeditnewvideoComponent },
    {path :'yourvideos/addvideo' , component : AddeditnewvideoComponent },
    {path :'yourvideos' , component : YourvideosComponent},
    {path :'likedvideos' , component : LikedvideosComponent},
    {path :'history' , component : HistoryvideosComponent},    
    
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
