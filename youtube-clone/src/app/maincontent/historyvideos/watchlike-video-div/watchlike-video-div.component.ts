import { Component, Input } from '@angular/core';
import { Video } from '../../homelistvideos/single-video/single-video.model';
import {
  faClose,
  faEye,
  faPlayCircle,
  faThumbsDown,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { HistoryService } from '../historyvideos.service';

@Component({
  selector: 'app-watchlike-video-div',
  templateUrl: './watchlike-video-div.component.html',
  styleUrl: './watchlike-video-div.component.css',
})
export class WatchlikeVideoDivComponent {

  constructor(private historyservice : HistoryService)
  {

  }

  @Input() history!: Video;
  faEye = faEye;
  faChannel = faPlayCircle;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faCross = faClose;

  deleteVideo() {
    this.historyservice.deleteVideo(this.history);  
  }
}
