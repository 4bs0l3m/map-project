/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapDefaultLogoComponent } from './map-default-logo.component';

describe('MapDefaultLogoComponent', () => {
  let component: MapDefaultLogoComponent;
  let fixture: ComponentFixture<MapDefaultLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDefaultLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDefaultLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
