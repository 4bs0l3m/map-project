/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapInputComponent } from './map-input.component';

describe('MapInputComponent', () => {
  let component: MapInputComponent;
  let fixture: ComponentFixture<MapInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapInputComponent ]
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
