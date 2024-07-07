import { Component, Input } from '@angular/core';
import { Video } from './single-video.model';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { VideoService } from '../videos.service';
import { Video2 } from '../../../searchvideopage/searchvideo.model';

@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrl: './single-video.component.css'
})
export class SingleVideoComponent {

  constructor(private router : Router , private videoservice : VideoService)
  {

  }
  faEye = faEye;
  @Input() video !: Video;
  @Input() video2 !: Video2;
  @Input() isvideo1 !: boolean;

  gotovideopage()
  {
    const id = this.videoservice.extractYouTubeId(this.video.videoURL)
    this.router.navigate(['/video' , this.video.channelName, id])
  }

  gotovideopage2()
  {
    this.router.navigate(['/video' , this.video2.channelName, this.video2.videoid]);
  }

}
