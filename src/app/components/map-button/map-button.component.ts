import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-map-button',
  templateUrl: './map-button.component.html',
  styleUrls: ['./map-button.component.scss']
})
export class MapButtonComponent implements OnInit {

  constructor() { }
  @Input('name')
  name:string='';
  @Input('id')
  id:string='';
  @Input('title')
  title:string='';
  @Input('text')
  text:string='';
  @Input('myClass')
  myClass:string='';
  @Output()
  clickEvent:EventEmitter<any>=new EventEmitter<any>();
  ngOnInit() {
  }
  onClick(){
    this.clickEvent.emit();
  }
}
