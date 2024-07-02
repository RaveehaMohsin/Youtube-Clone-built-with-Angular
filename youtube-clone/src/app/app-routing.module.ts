import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomelistvideosComponent } from './maincontent/homelistvideos/homelistvideos.component';

const routes: Routes = [
  {path: 'main/homepage' , component:HomelistvideosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
