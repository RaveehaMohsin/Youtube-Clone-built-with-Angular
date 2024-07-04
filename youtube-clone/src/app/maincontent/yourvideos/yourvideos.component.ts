import { Component, OnInit } from '@angular/core';
import { faArrowDown, faEye, faPen,   faThumbsDown,  faThumbsUp,  faTrashAlt, faTv } from '@fortawesome/free-solid-svg-icons';
import { YourVideosService } from './yourvideos.service';
import { Video } from '../homelistvideos/single-video/single-video.model';
import { Router } from '@angular/router';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-yourvideos',
  templateUrl: './yourvideos.component.html',
  styleUrl: './yourvideos.component.css'
})
export class YourvideosComponent implements OnInit {

  yourvideos : Video[] =[];
  faChannel = faTv;
  faArrow = faArrowDown;
  faView = faEye;
  faViewYotube = faYoutube;
  faDelete = faTrashAlt ;
  faEdit = faPen;
  faThumbsUp = faThumbsUp;
  faThumbDown = faThumbsDown;

  constructor(private videoservice : YourVideosService , private router : Router){

  }
  ngOnInit(): void {
    this.yourvideos = this.videoservice.getVideos();
  }

  gotoEditPage(index : number)
  {
     this.router.navigate(['main/yourvideos/editvideo/' , index]);
  }

  onDeleteVideo(index : number)
  {
    this.videoservice.deleteVideo(index);
  }


}
