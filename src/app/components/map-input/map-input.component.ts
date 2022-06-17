import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-map-input',
  templateUrl: './map-input.component.html',
  styleUrls: ['./map-input.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MapInputComponent implements OnInit {

  constructor() {
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
