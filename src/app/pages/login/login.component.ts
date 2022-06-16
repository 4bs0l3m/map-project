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
    // localStorage.setItem('accessToken','true')
    this.password
    console.log('this.password :', this.password);
    this.email
    console.log('this.username :', this.email);
  }
  changeEmail(value:string){
    this.email=value;
  }
  changePassword(value:string){
    this.password=value;
  }
}
