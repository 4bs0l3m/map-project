import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth-guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: []

})
export class AuthModule { }
