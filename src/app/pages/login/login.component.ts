import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) {

  }
  email:string="";
  password:string="";


  ngOnInit() {
    // Create the form

  }
  onLogin(){
    localStorage.setItem('accessToken','true')
    if(this.password==="123456" && this.email==="mikro@mikro.com.tr"){
      this._router.navigateByUrl('/')
    }
  }
  changeEmail(value:string){
  console.log('value --:', value);
    this.email=value;
  }
  changePassword(value:string){
  console.log('value -:', value);
    this.password=value;
  }
}
