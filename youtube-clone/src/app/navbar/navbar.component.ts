import { Component } from '@angular/core';
import { ActivatedRoute,  Router} from '@angular/router';
import {  faSearch, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router , private route : ActivatedRoute)
  {

  }

  faSearch = faSearch;
  faUser = faUser;
  faVideo = faVideo;

  onGoToAddVideo()
  {
    this.router.navigate(['main/yourvideos/addvideo'] , {relativeTo : this.route});
  }

}
