import { Component } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.css'
})
export class MaincontentComponent {

  constructor(private router: Router) {}

  isVideoRoute() {
    return this.router.url.includes('/main' ) || this.router.url.includes('/search');  
  }

}
