import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VideoSearchService } from './searchvideo.service';
import { Video2 } from './searchvideo.model';


@Component({
  selector: 'app-video-list',
  templateUrl: './searchvideopage.component.html',
  styleUrls: ['./searchvideopage.component.css']
})
export class VideoListComponent implements OnInit {
  searchtext: string = '';
  videos: Video2[] = [];

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoSearchService, 
    private router : Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.searchtext = params['searchid'];
      if (this.searchtext) {
        this.videoService.getSearchVideos(this.searchtext).subscribe(
          (videos: Video2[]) => {
            this.videos = videos;
          },
          (error) => {
            console.error('Error fetching videos:', error);
          }
        );
      }
    });
  }

  gotoVideo(video: Video2)
  {
    this.router.navigate(['video' , video.channelName, video.videoid]);
  }
  
}
