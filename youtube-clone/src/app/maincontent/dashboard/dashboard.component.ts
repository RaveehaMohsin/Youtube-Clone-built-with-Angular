import { Component } from '@angular/core';
import { faCog, faContactCard, faFileVideo, faHistory, faHome, faPhotoVideo, faSignOut, faThumbsUp, faUserCircle, faVideoCamera, faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  faHome = faHome;
  faLiked = faThumbsUp;
  faHistory = faHistory
  faProfile = faPhotoVideo;
  faSettings = faCog;
  faLogout = faSignOut;

  constructor(private authservice : AuthService)
  {

  }

  logout()
  {
    this.authservice.logout();
  }
  


}
