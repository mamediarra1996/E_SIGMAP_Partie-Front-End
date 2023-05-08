import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './register';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public loginUserFromRemote(register :Register):Observable<any>{
   return this.http.post<any>("http://localhost:8084/login", register)

  }
}
