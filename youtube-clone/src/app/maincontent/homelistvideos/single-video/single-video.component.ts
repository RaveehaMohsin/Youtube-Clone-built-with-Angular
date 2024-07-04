import { Component, Input } from '@angular/core';
import { Video } from './single-video.model';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { VideoService } from '../videos.service';

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

  gotovideopage()
  {
    const id = this.videoservice.extractYouTubeId(this.video.videoURL)
    this.router.navigate(['/video' , id])
  }

}
