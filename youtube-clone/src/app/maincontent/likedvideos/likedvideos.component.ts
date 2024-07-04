import { Component, OnInit } from '@angular/core';
import { LikedVideosService } from './likedvideos.service';
import { Video } from '../homelistvideos/single-video/single-video.model';

@Component({
  selector: 'app-likedvideos',
  templateUrl: './likedvideos.component.html',
  styleUrl: './likedvideos.component.css'
})
export class LikedvideosComponent implements OnInit {
  likedvideos : Video[] = [];
  constructor(private likevideosservice : LikedVideosService)
  {

  }
  ngOnInit(): void {
    this.likedvideos = this.likevideosservice.getLikevideosvideos();
  }

}
