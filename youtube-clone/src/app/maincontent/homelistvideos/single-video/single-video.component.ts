import { Component, Input } from '@angular/core';
import { Video } from '../single-video.model';

@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrl: './single-video.component.css'
})
export class SingleVideoComponent {
  @Input() video !: Video;

}
