import { Component, Input } from '@angular/core';
import { Video } from '../../homelistvideos/single-video/single-video.model';
import { faClose, faEye, faPlayCircle,  faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { LikedVideosService } from '../likedvideos.service';

@Component({
  selector: 'app-likevideo',
  templateUrl: './likevideo.component.html',
  styleUrl: './likevideo.component.css'
})
export class LikevideoComponent {
  constructor(private likedservice : LikedVideosService)
  {

  }

  @Input() likevideo!: Video;
  faEye = faEye;
  faChannel = faPlayCircle;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faCross = faClose;

  onDislikeVideo()
  {
    this.likedservice.unlikevideo(this.likevideo);
  }

}
