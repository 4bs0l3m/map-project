import { ViewEncapsulation } from '@angular/compiler';
import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-map-form-field',
  exportAs: 'app-map-form-field',
  templateUrl: './map-form-field.component.html',
  styleUrls: ['./map-form-field.component.scss']
})
export class MapFormFieldComponent {

  constructor() { }
  @ContentChild(TemplateRef)
  layoutTemplate!: TemplateRef<any>;

  @Input('fieldId') fieldId:string='';
  @Input('fieldText') fieldText:string='';

  @Input('myClass')
  myClass:string='';
  ngOnInit() {
  }

}
