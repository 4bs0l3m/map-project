import { CommonModule } from '@angular/common';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapInputComponent } from './map-input.component';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';

describe('MapInputComponent', () => {
  let component: MapInputComponent;
  let fixture: ComponentFixture<MapInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapInputComponent ],
      imports:[CommonModule,ReactiveFormsModule,FormsModule],
      providers:[NgControl ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
