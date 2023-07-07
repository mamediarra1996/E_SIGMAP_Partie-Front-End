import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register = new Register();
  msg='';
constructor(private service: RegistrationService, private router : Router){}

  registerUser(){
    this.service.registerUserFromRemote(this.register).subscribe(
      data =>{
          console.log("response recieved");
          this.router.navigate(['/login'])
        },
      error => {
        console.log("exception accured");
        this.msg=error.error;
      }

    )

  }
}