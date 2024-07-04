import { Component, OnInit } from '@angular/core';
import { VideoService } from './videos.service';
import { Video } from './single-video/single-video.model';

@Component({
  selector: 'app-homelistvideos',
  templateUrl: './homelistvideos.component.html',
  styleUrl: './homelistvideos.component.css'
})
export class HomelistvideosComponent implements OnInit {
  videos !: Video[];
  scrollRight(element: HTMLElement) {
    element.scrollBy({
      left: 150, 
      behavior: 'smooth'
      
    });
  }

  scrollLeft(element: HTMLElement) {
    element.scrollBy({
      left: -150, 
      behavior: 'smooth'
      
    });
  }

  constructor(private videoservice : VideoService)
  {

  }

  ngOnInit(): void {
    this.videos = this.videoservice.getVideos();
    
  }

}
