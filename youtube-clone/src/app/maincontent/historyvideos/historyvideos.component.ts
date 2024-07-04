import { Component, OnInit } from '@angular/core';
import { HistoryService } from './historyvideos.service';
import { Video } from '../homelistvideos/single-video/single-video.model';

@Component({
  selector: 'app-historyvideos',
  templateUrl: './historyvideos.component.html',
  styleUrl: './historyvideos.component.css'
})
export class HistoryvideosComponent implements OnInit {

  historyvideos : Video[] =[];
  constructor(private historyservice : HistoryService)
  {

  }
  ngOnInit(): void {
    this.historyvideos = this.historyservice.gethistoryvideos();
  }

}
