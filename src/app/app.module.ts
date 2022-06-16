import { AuthModule } from './auth/auth.module';
import { MapDefaultLogoComponent } from './components/map-default-logo/map-default-logo.component';
import { LoginComponent } from './pages/login/login.component';
import { MapFormFieldComponent } from './components/map-form-field/map-form-field.component';
import { MapCardComponent } from './components/map-card/map-card.component';
import { MapButtonComponent } from './components/map-button/map-button.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapInputComponent } from './components/map-input/map-input.component';
import { UserService } from './services/user.service';
import { MapUserListItemComponent } from './components/map-user-list-item/map-user-list-item.component';
import { MapUserListComponent } from './components/map-user-list/map-user-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './pages/user-list/user-list.component';
import { AuthGuard } from './auth/guards/auth-guard';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    MapInputComponent,
    MapButtonComponent,
    MapCardComponent,
    MapFormFieldComponent,
    LoginComponent,
    ForgotPasswordComponent,
    MapDefaultLogoComponent,
    MapUserListItemComponent,
    MapUserListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [UserService,AuthGuard],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
