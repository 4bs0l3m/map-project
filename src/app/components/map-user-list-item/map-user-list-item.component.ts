import { UserDto } from './../../dtos/UserDto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-user-list-item',
  templateUrl: './map-user-list-item.component.html',
  styleUrls: ['./map-user-list-item.component.scss']
})
export class MapUserListItemComponent implements OnInit {

  constructor() { }
  model!:UserDto;

  ngOnInit() {
  }

}
