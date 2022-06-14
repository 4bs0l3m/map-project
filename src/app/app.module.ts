import { MapFormFieldComponent } from './components/map-form-field/map-form-field.component';
import { MapCardComponent } from './components/map-card/map-card.component';
import { MapButtonComponent } from './components/map-button/map-button.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapInputComponent } from './components/map-input/map-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MapInputComponent,
    MapButtonComponent,
    MapCardComponent,
    MapFormFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
