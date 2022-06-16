import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { AuthGuard } from './auth/guards/auth-guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgot',
    component:ForgotPasswordComponent
  },
  {
    path:'',
    component:UserListComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
