import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-singlevideodisplay',
  templateUrl: './singlevideodisplay.component.html',
  styleUrls: ['./singlevideodisplay.component.css']
})
export class SinglevideodisplayComponent implements OnInit {
  youtubeid!: string ;
  videoUrl: SafeResourceUrl = '';

  constructor(private route: ActivatedRoute , private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.youtubeid = params['videoid'];
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.youtubeid}`);
    });
  }

}

