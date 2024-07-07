import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'youtube-clone';
  constructor(private authservice : AuthService ,private route : Router){}

  ngOnInit(): void
  {
    this.route.navigate(['/auth']);
    this.authservice.autoLogin();
  }
}
