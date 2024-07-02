import { Component } from '@angular/core';
import {  faSearch, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  faSearch = faSearch;
  faUser = faUser;
  faVideo = faVideo;

}
