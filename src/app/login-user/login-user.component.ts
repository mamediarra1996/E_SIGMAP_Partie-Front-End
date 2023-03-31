import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
})
export class LoginUserComponent implements OnInit {
  
  username :String | any;
  password :String | any;
  message:any


  constructor(private service:RestapiService,private router:Router) { }

  ngOnInit(): void {
  }

  doLogin(){
   let resp= this.service.login(this.username,this.password);
   resp.subscribe(data=>{
    this.message = data;
    this.router.navigate(["/home"])
   });
  }

}
