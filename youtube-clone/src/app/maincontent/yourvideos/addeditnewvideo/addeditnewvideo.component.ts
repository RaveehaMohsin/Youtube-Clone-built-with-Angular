import { Component, OnInit,  ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { YourVideosService } from '../yourvideos.service';
import { Video } from '../../homelistvideos/single-video/single-video.model';



@Component({
  selector: 'app-addeditnewvideo',
  templateUrl: './addeditnewvideo.component.html',
  styleUrl: './addeditnewvideo.component.css'
})
export class AddeditnewvideoComponent implements OnInit {

  isUpdating = false;
  updatingId !: number;
  updatevideo!:Video;
  videoForm !: FormGroup;

  constructor(private router : Router , private route : ActivatedRoute, private yourvideoservice : YourVideosService)
  {

  }

  ngOnInit(): void {
     this.route.params.subscribe((params : Params)=>{
      this.updatingId = +params['id'];
      this.isUpdating = params['id'] != null;
      this.initReactiveForm();
    })
    

  }

  initReactiveForm()
  {
    let title = '';
    let description ='';
    let thumbnail = '';
    let videourl = '';
    if(this.isUpdating)
      {
        this.updatevideo = this.yourvideoservice.getvideo(this.updatingId);
        title = this.updatevideo.title;
        description = this.updatevideo.description;
        thumbnail = this.updatevideo.thumbnail;
        videourl = this.updatevideo.videoURL;
      }
    this.videoForm = new FormGroup({
      'title' : new FormControl(title , Validators.required),
      'description' : new FormControl(description , Validators.required),
      'videourl' : new FormControl(videourl , Validators.required),
      'thumbnail' : new FormControl(thumbnail , Validators.required),
     });
  }


  faClose = faClose;

  onClose()
  {
    this.router.navigate(['main/yourvideos']);
  }
  onSubmit()
  {    
      const title = this.videoForm.value.title;
      const description = this.videoForm.value.description;
      const thumbnail = this.videoForm.value.thumbnail;
      const videourl = this.videoForm.value.videourl;
      const date = new Date();
      const likes = Math.floor(Math.random() * 1000) + 1; 
      const dislikes = Math.floor(Math.random() * 100) + 1; 
      const views = Math.floor(Math.random() * 100000) + 1; 
      const video = new Video(title , description , thumbnail , videourl , 'Global Media Hub' , views , likes , dislikes , date);    
     if(this.isUpdating)
      {
        const newvideo = new Video(title , description , thumbnail , videourl , this.updatevideo.channelName , this.updatevideo.views , this.updatevideo.likes , this.updatevideo.dislikes , this.updatevideo.uploadDate);
        this.yourvideoservice.updateVideo(this.updatingId , newvideo);
      }
      else
      {
        this.yourvideoservice.addvideo(video);
      }

    this.videoForm.reset();
    this.onClose();
  }

}
