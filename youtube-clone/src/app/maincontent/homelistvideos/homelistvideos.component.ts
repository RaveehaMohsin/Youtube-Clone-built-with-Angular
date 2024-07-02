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
  constructor(private videoservice : VideoService)
  {

  }

  ngOnInit(): void {
    this.videos = this.videoservice.getVideos();
    
  }

}
