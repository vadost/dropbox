import { Component } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'db-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.css']
})
export class PhotoItemComponent {
  @Input() photo: any;
}
