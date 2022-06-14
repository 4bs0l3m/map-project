import { ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-map-card',
  exportAs: 'app-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.scss']



})
export class MapCardComponent  {

  constructor() {

  }
  @Input('name')
  name:string='';
  @Input('id')
  id:string='';
  @Input('title')
  title:string='';
  @Input('myClass')
  myClass:string='';
  @ContentChild(TemplateRef)
  layoutTemplate!: TemplateRef<any>;

  ngOnInit() {
  }

}
