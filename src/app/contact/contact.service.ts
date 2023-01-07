import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseURL="http://localhost:8084/contacts/"

  constructor(private httpClient: HttpClient) { }

  getContact():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(this.baseURL);
   }
}
