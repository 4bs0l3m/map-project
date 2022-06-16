import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,private _router: Router) {

  }
  email:string="";
  password:string="";


  ngOnInit() {
    // Create the form

  }
  clicked(){
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
