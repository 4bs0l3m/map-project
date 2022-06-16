import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,private _router: Router) {

  }
  email:string="";
  password:string="";


  ngOnInit() {
    // Create the form

  }
  clicked(){
    // localStorage.setItem('accessToken','true')
    this._router.navigateByUrl('/login')
  }
  changeEmail(value:string){
  console.log('value --:', value);
    this.email=value;
  }


}
