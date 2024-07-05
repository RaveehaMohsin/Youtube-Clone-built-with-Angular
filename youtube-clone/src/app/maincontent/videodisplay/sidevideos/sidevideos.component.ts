import { Component, OnInit } from '@angular/core';
import { Video3 } from './video.model';
import { ActivatedRoute, Params , Router } from '@angular/router';
import { SideVideoService } from './sidevideos.service';



@Component({
  selector: 'app-sidevideos',
  templateUrl: './sidevideos.component.html',
  styleUrl: './sidevideos.component.css'
})
export class SidevideosComponent implements OnInit {

  constructor(private route : ActivatedRoute  , private sidevideo : SideVideoService , private router:Router){}

  videos : Video3[] = [];
  youtubeid!: string;
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.youtubeid = params['videotitle'];
      if (this.youtubeid) {
        this.sidevideo.getSearchVideos(this.youtubeid).subscribe(
          (videos: Video3[]) => {
            this.videos = videos;
          },
          (error) => {
            console.error('Error fetching videos:', error);
          }
        );
      }   
    });
    

  }

  gotoVideo(video : Video3){
    this.router.navigate(['/video' , video.channelName , video.videoId]);
  }

}
