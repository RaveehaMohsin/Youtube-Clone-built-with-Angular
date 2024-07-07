import { Component } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.css'
})
export class MaincontentComponent {

  constructor(private router: Router) {}

  private validRoutes = [
    '/main/homepage',
    '/main/yourvideos',
    '/main/yourvideos/editvideo',
    '/main/yourvideos/addvideo',
    '/main/likedvideos',
    '/main/history',
    '/search'
  ];

  isVideoRoute(): boolean {
    const currentUrl = this.router.url;
    
    for (let route of this.validRoutes) {
      if (currentUrl.startsWith(route)) {
        return true;
      }
    }

    return false;
  }

}
