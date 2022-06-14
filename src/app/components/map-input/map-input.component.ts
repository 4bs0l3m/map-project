import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Event } from '@angular/router';

@Component({
  selector: 'app-map-input',
  templateUrl: './map-input.component.html',
  styleUrls: ['./map-input.component.scss']
})
export class MapInputComponent implements OnInit {

  constructor() {
    this.formControl=new FormControl()
   }
   @Input()
  myValue:string='';
  @Input('type')
  type:string='text';
  @Input('name')
  name:string='';
  @Input('id')
  id:string='';
  @Input('myClass')
  myClass:string='';
  @Input('placeholder')
  placeholder:string='';

  @Input()
  formControl:FormControl;

  @Output()
  valueChange:EventEmitter<any>=new EventEmitter<any>();
  @ViewChild('myInput')
  myInput!: HTMLInputElement;
  ngOnInit() {

  }
  onValueChange(value:string){
    if(value){

      this.valueChange.emit(value);
      console.log('value :', value);
    }
  }
}
