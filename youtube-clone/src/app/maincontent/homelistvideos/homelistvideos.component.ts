import { Component, OnInit } from '@angular/core';
import { VideoService } from './videos.service';
import { Video } from './single-video/single-video.model';
import { VideoSearchService } from '../../searchvideopage/searchvideo.service';
import { Video2 } from '../../searchvideopage/searchvideo.model';


@Component({
  selector: 'app-homelistvideos',
  templateUrl: './homelistvideos.component.html',
  styleUrl: './homelistvideos.component.css'
})
export class HomelistvideosComponent implements OnInit {
  isvideo1 = true;
  videos !: Video[]; 
  othervideos !: Video2[];

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

  constructor(private videoservice : VideoService , private videosearchservice : VideoSearchService)
  {

  }

  ngOnInit(): void {
    this.videos = this.videoservice.getVideos();
    
  }

  onclickAllPage(section : string)
  {
    
    this.isvideo1 = false;
    this.videosearchservice.getSearchVideos(section).subscribe(
      (videos: Video2[]) => {
        this.othervideos = videos;
      },
      (error) => {
        console.error('Error fetching videos:', error);
      }
    );
  }

}
