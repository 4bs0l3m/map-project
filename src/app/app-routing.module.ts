import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { AuthGuard } from './auth/guards/auth-guard';
import { NoAuthGuard } from './auth/guards/noAuthGuard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    canActivate:[NoAuthGuard],
    canActivateChild:[NoAuthGuard]

  },
  {
    path:'forgot',
    component:ForgotPasswordComponent,
    canActivate:[NoAuthGuard],
    canActivateChild:[NoAuthGuard]
  },
  {
    path:'',
    component:UserListComponent,
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
