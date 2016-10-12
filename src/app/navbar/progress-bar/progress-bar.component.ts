import { Component, OnInit } from '@angular/core';
import {PhotosService} from "../../services/photos.service";

@Component({
  selector: 'db-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  private maxSize:number = 5;
  private currentSize:number;
  private percent:number;

  constructor(private _photosService: PhotosService) {}

  ngOnInit() {this.getTotalSize(); }

  getTotalSize() {
    this._photosService.getTotalSize()
      .subscribe(
        currentSize => {
          console.log('currentSize', currentSize);
          this.currentSize = currentSize;
          this.percent = (this.currentSize * 100/5);
        },
        error =>  console.log(error));
  }

}
