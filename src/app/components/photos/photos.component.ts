import { Component, OnInit } from '@angular/core';
import {PhotosService} from "../../services/photos.service";
import {Observable} from "rxjs";

@Component({
  selector: 'db-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  title:string = 'Photos';
  photos:any;
  currentSort: string = '';
  errorMessage: string;

  constructor(private _photosService: PhotosService) {}

  ngOnInit() { this.getPhotos(); }

  getPhotos() {
    this._photosService.getPhotos()
      .subscribe(
        photos => this.photos = photos,
        error =>  this.errorMessage = <any>error);
  }

  sortBy(value:string){
    if(this.currentSort == value){
      return;
    }
    this.currentSort = value;

    switch (value) {
      case 'name':
        this.sortString(value);
        break;
      case 'size':
      case 'modified':
        this.sortNumber(value);
        break;
      default:
        break;
    }

  }

  sortString(value: string){
    this.photos.sort(function (a, b) {
      if (a[value].toLowerCase() > b[value].toLowerCase()) {
        return 1;
      }

      if (a[value].toLowerCase() < b[value].toLowerCase()) {
        return -1;
      }

      return 0;
    });
  }

  sortNumber(value: string){
    this.photos.sort(function (a, b) {
      if (+a[value] > +b[value]) {
        return 1;
      }

      if (+a[value] < +b[value]) {
        return -1;
      }

      return 0;
    });
  }

}
