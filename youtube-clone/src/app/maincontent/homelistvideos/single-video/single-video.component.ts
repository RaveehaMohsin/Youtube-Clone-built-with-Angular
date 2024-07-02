import { Component, Input } from '@angular/core';
import { Video } from './single-video.model';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrl: './single-video.component.css'
})
export class SingleVideoComponent {
  faEye = faEye;
  @Input() video !: Video;

}
