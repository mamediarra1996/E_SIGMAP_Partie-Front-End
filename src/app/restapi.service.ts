import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }


  public login(username:String,password:String){
    const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+";"+password)})
    return this.http.get("http://localhost:8084/",{headers,responseType:'text' as 'json'});
  }
}
