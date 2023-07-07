import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Register } from '../register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
})
export class LoginUserComponent implements OnInit {

  constructor(private service: RegistrationService, private router: Router) { }
  register = new Register();
  msg='';
  ngOnInit(): void {
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

  loginUser(){
    this.service.loginUserFromRemote(this.register).subscribe(
      data =>{
       console.log("réponse reçue");
       this.router.navigate(['/loginsuccess'])
    },
      error => {
        console.error("une erreur s'est produite");
        this.msg="Mauvaises identification, veuillez saisir une adresse e-mail et un mot de passe valides";
      }
      
    )

  }
    
}
