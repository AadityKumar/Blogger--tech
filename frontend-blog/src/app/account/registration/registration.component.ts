import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";  
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {AccountserviceService} from '../accountservice.service';
import {Accountinfo} from '../accountinfo';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;
  datasaved = false;
  massage: string;
  
  constructor(private formbuilder: FormBuilder, private accountservice: AccountserviceService, private router:Router) { 
    if(localStorage.getItem('Loginuser')){
      this.router.navigate(['/'])
    }
  }
 
  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.regForm = this.formbuilder.group({
       name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
 
  onSubmit() {
    
    let userinfo = this.regForm.value;
//console.log(userinfo);
    this.createuserAccount(userinfo);
    this.regForm.reset();
  }
  createuserAccount(accinfo:Accountinfo) { // backend/api/routes/users.js
    this.accountservice.createaccount(accinfo).subscribe(
      (resResult) => {
        let response = JSON.stringify(resResult)
        console.log(response)
        this.datasaved = true;
        this.massage = resResult['msg'];
       this.regForm.reset();
      }
    )
  }
}
