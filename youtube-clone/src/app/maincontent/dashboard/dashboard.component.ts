import { Component } from '@angular/core';
import { faCog, faHistory, faHome, faThumbsUp, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  faHome = faHome;
  faLiked = faThumbsUp;
  faHistory = faHistory
  faProfile = faUserCircle;
  faSettings = faCog;
  


}
